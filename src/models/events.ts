import { z } from 'zod';
import { Chat, Message } from '@/models/chats';
import { ConnectionRequest, Connection } from '@/models/connections';

const BaseEventSchema = z.object({
    type: z.string(),
    userIds: z.array(z.string()),
});

// const MessageEventSchema = BaseEventSchema.extend({
//     type: z.literal('message'),
//     message: z.object({
//         chatId: z.string(),
//         messageId: z.string(),
//         userIds: z.array(z.string()),
//         senderId: z.string(),
//         content: z.string(),
//         createdAt: z.number(),
//     }),
// });

interface BaseEvent {
    type: string;
    userIds: string[];
}

interface ChatMessageEvent extends BaseEvent {
    type: 'chatMessage';
    chat: Chat;
    message: Message;
};

interface ChatDeletionEvent extends BaseEvent {
    type: 'chatDeletion';
    chatId: string;
};

interface ConnectionRequestEvent extends BaseEvent {
    type: 'connectionRequest';
    connectionRequest: ConnectionRequest;
};

interface ConnectionRequestAcceptedEvent extends BaseEvent {
    type: 'connectionRequestAccepted';
    connectionRequest: ConnectionRequest;
    connection: Connection;
};

interface ConnectionDeletionEvent extends BaseEvent {
    type: 'connectionDeletion';
    connectionId: number;
};

export {
    BaseEventSchema,
    // MessageEventSchema,
    BaseEvent,
    ChatMessageEvent,
    ChatDeletionEvent,
    ConnectionRequestEvent,
    ConnectionRequestAcceptedEvent,
    ConnectionDeletionEvent
};