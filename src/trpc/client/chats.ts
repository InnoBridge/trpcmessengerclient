import { client } from '@/trpc/client/api';
import { ChatMessagePair, Chat, Message } from '@/models/chats';
import { PaginatedResult } from '@/models/pagination';

const getChatByConnectionId = async (connectionId: number): Promise<Chat | null> => {
    return await (client as any).chats.getChatByConnectionId.query({ connectionId });
};

const getChatByChatId = async (chatId: string): Promise<Chat | null> => {
    return await (client as any).chats.getChatByChatId.query({ chatId });
};

const getChatsByUserId = async (
    userId: string,
    updatedAfter?: number,
    page: number = 0,
    limit: number = 20
): Promise<PaginatedResult<Chat>> => {
    return await (client as any).chats.getChatsByUserId.query({
        userId,
        updatedAfter,
        page,
        limit
    });
};

const deleteChat = async (chatId: string): Promise<void> => {
    return await (client as any).chats.deleteChat.mutate({ chatId });
}

const getMessagesByChatId = async (
    chatId: string,
    createdAfter?: number,
    page: number = 0,
    limit: number = 20
): Promise<PaginatedResult<Message>> => {
    return await (client as any).chats.getMessagesByChatId.query({
        chatId,
        createdAfter,
        page,
        limit
    });
};

const getMessagesByUserId = async (
    userId: string,
    createdAfter?: number,
    page: number = 0,
    limit: number = 20
): Promise<PaginatedResult<Message>> => {
    return await (client as any).chats.getMessagesByUserId.query({
        userId,
        createdAfter,
        page,
        limit
    });
};

const createMessage = async (
    connectionId: number,
    senderId: string,
    content: string
): Promise<ChatMessagePair> => {
    return await (client as any).chats.createMessage.mutate({
        connectionId,
        senderId,
        content
    });
};

export {
    getChatByConnectionId,
    getChatByChatId,
    getChatsByUserId,
    deleteChat,
    getMessagesByChatId,
    getMessagesByUserId,
    createMessage
};