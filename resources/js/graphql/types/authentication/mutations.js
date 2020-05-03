/**
 * Internal dependencies.
 */
import client from '@/graphql/client';
import Queries from '@/graphql/types/authentication/graphql-query/queries';
import Mutations from '@/graphql/types/authentication/graphql-query/mutations';

/**
 *
 * @param {Object} input { email, name }
 * @returns {Promise<FetchResult<any>>}
 */
export const signIn = (input) => {
    return client.mutate({
        mutation: Mutations.signIn,
        variables: {
            input,
        },
        update(cache, { data: { signIn: user } }) {
            window.localStorage.setItem('laravel_api_token', user.api_token);
            cache.writeQuery({
                query: Queries.getCurrentUser,
                data: { user },
            });
        },
    });
};

export const signUp = (input) => {
    return client.mutate({
        mutation: Mutations.signUp,
        variables: {
            input,
        },
        update(cache, { data: { signUp: user } }) {
            window.localStorage.setItem('laravel_api_token', user.api_token);
            cache.writeQuery({
                query: Queries.getCurrentUser,
                data: { user },
            });
        },
    });
};
