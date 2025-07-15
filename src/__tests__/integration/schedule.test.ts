import * as dotenv from 'dotenv';
import path from 'path';
import { 
    initializeTRPCClient
} from '@/trpc/client/api';
import {
    getEventsByProviderId,
    getEventsByCustomerId,
    getEventsByProviderOrCustomerId,
    createEvent,
    updateEventStatus,
    deleteEvent
} from '@/trpc/client/schedule';
import { Event, EventStatus } from '@/models/scheduledEvents';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const SERVER_URL = process.env.SERVER_URL;

const createEventTest = async () => {
    console.log('Starting createEvent test...');
    try {
        const event = {
            id: '0001',
            start: '2025-06-25 10:00:00',
            end: '2025-06-25 12:00:00',
            title: 'Test Event',
            summary: 'This is a test event',
            color: '#FF0000',
            status: EventStatus.VACANT,
            providerId: "abc123",
            customerId: "xyz456"
        } as Event;
        const createdEvent = await createEvent(event);
        console.log('Event created successfully:', createdEvent);

        const fetchEventsByProviderId = await getEventsByProviderId(event.providerId);
        console.log('Fetched events by providerId:', fetchEventsByProviderId);
        const fetchEventsByCustomerId = await getEventsByCustomerId(event.customerId!);
        console.log('Fetched events by customerId:', fetchEventsByCustomerId);
        const fetchedEvent = await getEventsByProviderOrCustomerId(event.providerId);
        console.log('Fetched event by provider or customer ID:', fetchedEvent);

        await deleteEvent(createdEvent.id!);
        const deletedEvent = await getEventsByProviderId(event.providerId);
        console.log('Deleted event, remaining events:', deletedEvent);

        console.log('createEvent test completed successfully');
    } catch (error) {
        console.error('Failed to create event:', error);
        throw error;
    }
};

const updateEventStatusTest = async () => {
    console.log('Starting updateEventStatus test...');
    try {
        const event = {
            id: '0001',
            start: '2025-06-25 10:00:00',
            end: '2025-06-25 12:00:00',
            title: 'Test Event',
            summary: 'This is a test event',
            color: '#FF0000',
            status: EventStatus.VACANT,
            providerId: "abc123",
            customerId: "xyz456"
        } as Event;
        const createdEvent = await createEvent(event);

        await updateEventStatus(createdEvent.id!, EventStatus.BOOKED);
        const updatedEvent = await getEventsByProviderId(event.providerId);
        console.log('Event status updated successfully:', updatedEvent);
        await deleteEvent(createdEvent.id!);

        console.log('updateEventStatus test completed successfully');
    } catch (error) {
        console.error('Failed to update event status:', error);
        throw error;
    }
}

(async function main() {
        let subscription: any;
    try {
        // sync test
        initializeTRPCClient(SERVER_URL!);

        // async tests in order
        await createEventTest();
        await updateEventStatusTest();
        console.log("🎉 All integration tests passed");
    } catch (err) {
        console.error("❌ Integration tests failed:", err);
        process.exit(1);
    }
})();