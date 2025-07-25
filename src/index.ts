import * as api from '@/trpc/client/api';
import * as connectionsApi from '@/trpc/client/connections';
import * as scheduleApi from '@/trpc/client/schedule';
import * as chatsApi from '@/trpc/client/chats';
import * as usersApi from '@/trpc/client/users';
import * as connections from '@/models/connections';
import * as scheduledEvents from '@/models/scheduledEvents';
import * as emails from '@/models/emails';
import * as events from '@/models/events';
import * as chats from '@/models/chats';
import * as users from '@/models/users';
import * as pagination from '@/models/pagination';

export {
    api,
    connectionsApi,
    scheduleApi,
    chatsApi,
    usersApi,
    connections,
    scheduledEvents,
    emails,
    events,
    chats,
    users,
    pagination
};