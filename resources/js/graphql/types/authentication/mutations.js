/**
 * Internal dependencies.
 */
import client from '@/graphql/client';
import { getCurrentUser } from '@/graphql/types/authentication/graphql-query/queries';
import { signIn as signInMutation } from '@/graphql/types/authentication/graphql-query/mutations';

/**
 *
 * @param {Object} input { email, name }
 * @returns {Promise<FetchResult<any>>}
 */
export const signIn = (input) => {
    return client.mutate({
        mutation: signInMutation,
        variables: {
            input,
        },
        update(cache, { data: { signIn: user } }) {
            window.localStorage.setItem('laravel_api_token', user.api_token);
            cache.writeQuery({
                query: getCurrentUser,
                data: { user },
            });
        },
    });
};
