/**
 * Internal dependencies.
 */
import client from '@/graphql/client';
import Queries from '@/graphql/types/authentication/graphql-query/queries';

export const getCurrentUser = () => {
    return client.query({
        query: Queries.getCurrentUser,
    })
        .then(({ data: { user } }) => user);
};
