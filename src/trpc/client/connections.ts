import { client } from '@/trpc/client/api';
import { Connection, ConnectionRequest } from '@/models/connections';

const getConnectionRequests = async (userId: string): Promise<ConnectionRequest[]> => {
    return await (client as any).connections.getRequests.query({ userId });
};

const createConnectionRequest = async (
    requesterId: string,
    receiverId: string,
    greetingText?: string
): Promise<ConnectionRequest> => {
    return await (client as any).connections.createRequest.mutate({
        requesterId,
        receiverId,
        greetingText
    });
};

const cancelConnectionRequest = async (
    requestId: number,
    requesterId: string
): Promise<ConnectionRequest | null> => {
    return await (client as any).connections.cancelRequest.mutate({ requestId, requesterId });
};

const acceptConnectionRequest = async (
    requestId: number,
    receiverId: string
): Promise<ConnectionRequest | null> => {
    return await (client as any).connections.acceptRequest.mutate({ requestId, receiverId });
}

const rejectConnectionRequest = async (
    requestId: number,
    receiverId: string
): Promise<ConnectionRequest | null> => {
    return await (client as any).connections.rejectRequest.mutate({ requestId, receiverId });
}

const deleteConnectionRequest = async (requestId: number): Promise<void> => {
    return await (client as any).connections.deleteRequest.mutate({ requestId });
};

const getConnectionByUserIdsPair = async (
    userId1: string,
    userId2: string
): Promise<Connection | null> => {
    return await (client as any).connections.getConnectionByUserIdsPair.query({ userId1, userId2 });
};

const getConnectionsByUserId = async (userId: string): Promise<Connection[]> => {
    return await (client as any).connections.getConnectionsByUserId.query({ userId });
};

const deleteConnection = async (connectionId: number): Promise<void> => {
    return await (client as any).connections.deleteConnection.mutate({ connectionId });
};

export {
    getConnectionRequests,
    createConnectionRequest,
    cancelConnectionRequest,
    acceptConnectionRequest,
    rejectConnectionRequest,
    deleteConnectionRequest,
    getConnectionByUserIdsPair,
    getConnectionsByUserId,
    deleteConnection
};