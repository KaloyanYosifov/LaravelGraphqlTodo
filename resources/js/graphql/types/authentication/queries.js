/**
 * Internal dependencies.
 */
import client from '@/graphql/client';
import { getCurrentUser as getCurrentUserQuery } from '@/graphql/types/authentication/graphql-query/queries';

export const getCurrentUser = () => {
    return client.query({
        query: getCurrentUserQuery,
    });
};
