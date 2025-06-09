import { client } from '@/trpc/client/api';
import { User } from '@/models/users';

const getUserByUsername = async (username: string): Promise<User | null> => {
    return await (client as any).users.getUserByUsername.query({ username });
};

export {
    getUserByUsername
};