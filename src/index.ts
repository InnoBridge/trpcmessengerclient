import * as api from '@/trpc/client/api';
import * as connectionsApi from '@/trpc/client/connections';
import * as messagesApi from '@/trpc/client/messages';
import * as usersApi from '@/trpc/client/users';
import * as connections from '@/models/connections';
import * as emails from '@/models/emails';
import * as events from '@/models/events';
import * as messages from '@/models/messages';
import * as users from '@/models/users';

export {
    api,
    connectionsApi,
    messagesApi,
    usersApi,
    connections,
    emails,
    events,
    messages,
    users
};