import { client } from '@/trpc/client/api';
import { Event, EventStatus } from '@/models/scheduledEvents';

const getEventById = async (eventId: string): Promise<Event | null> => {
    return await (client as any).schedule.getEventById.query({ eventId });
};

const getEventsByProviderId = async (providerId: string): Promise<Event[]> => {
    return await (client as any).schedule.getEventsByProviderId.query({ providerId });
};

const getEventsByCustomerId = async (customerId: string): Promise<Event[]> => {
    return await (client as any).schedule.getEventsByCustomerId.query({ customerId });
};

const getEventsByProviderOrCustomerId = async (userId: string): Promise<Event | null> => {
    return await (client as any).schedule.getEventsByProviderOrCustomerId.query({ userId });
};

const createEvent = async (event: Event): Promise<Event> => {
    return await (client as any).schedule.createEvent.mutate(event);
};

const updateEventStatus = async (eventId: string, status: EventStatus): Promise<Event> => {
    return await (client as any).schedule.updateEventStatus.mutate({ eventId, status });
};

const updateEventStatusAndColor = async (eventId: string, status: EventStatus, color: string): Promise<Event> => {
    return await (client as any).schedule.updateEventStatusAndColor.mutate({ eventId, status, color });
};

const updateEventStatusAndCustomerId = async (eventId: string, status: EventStatus, customerId: string | null): Promise<Event> => {
    return await (client as any).schedule.updateEventStatusAndCustomerId.mutate({ eventId, status, customerId });
};

const updateEventStatusWithColorAndCustomerId = async (eventId: string, status: EventStatus, color: string, customerId: string | null): Promise<Event> => {
    return await (client as any).schedule.updateEventStatusWithColorAndCustomerId.mutate({ eventId, status, color, customerId });
};

const deleteEvent = async (eventId: string): Promise<void> => {
    return await (client as any).schedule.deleteEvent.mutate({ eventId });
};

const bindSubscriberToSchedule = (
    providerId: string,
    subscriberId: string
): Promise<void> => {
    return (client as any).schedule.bindSubscriberToSchedule.mutate({ providerId, subscriberId });
};

const unbindSubscriberToSchedule = (
    providerId: string,
    subscriberId: string
): Promise<void> => {
    return (client as any).schedule.unbindSubscriberToSchedule.mutate({ providerId, subscriberId });
};

export {
    getEventById,
    getEventsByProviderId,
    getEventsByCustomerId,
    getEventsByProviderOrCustomerId,
    createEvent,
    updateEventStatus,
    updateEventStatusAndColor,
    updateEventStatusAndCustomerId,
    updateEventStatusWithColorAndCustomerId,
    deleteEvent,
    bindSubscriberToSchedule,
    unbindSubscriberToSchedule
};
