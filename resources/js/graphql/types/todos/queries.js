/**
 * Internal dependencies.
 */
import client from '@/graphql/client';
import Queries from './graphql-query/queries';

export const getTodos = (data = {}) => {
    const defaults = {
        input: null,
        page: 1,
        ...data,
    };

    return client.query({
        query: Queries.getTodos,
        variables: {
            ...defaults,
        },
    });
};
