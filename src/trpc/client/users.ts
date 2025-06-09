import { client } from '@/trpc/client/api';
import { User } from '@/models/user';

const getUserByUsername = async (username: string): Promise<User | null> => {
    return await (client as any).users.getUserByUsername.query({ username });
};

export {
    getUserByUsername
};