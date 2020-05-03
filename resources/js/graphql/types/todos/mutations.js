/**
 * Internal dependencies.
 */
import client from '@/graphql/client';
import Queries from './graphql-query/queries';
import Mutations from './graphql-query/mutations';
import { getCurrentUser } from '@/graphql/types/authentication/queries';

export const createTodo = (input) => {
    return client.mutate({
        mutation: Mutations.createTodo,
        variables: {
            input,
        },
        update: async (cache, { data: { createTodo: todo } }) => {
            try {
                const { user } = cache.readQuery({
                    query: Queries.getTodos,
                });

                cache.writeQuery({
                    query: Queries.getTodos,
                    data: {
                        user: {
                            ...user,
                            todos: {
                                ...user.todos,
                                data: [
                                    todo,
                                    ...user.todos.data,
                                ],
                            },
                        },
                    },
                });
            } catch {
                // empty catch
            }
        },
        optimisticResponse: {
            createTodo: {
                __typename: 'Todo',
                id: Math.random(),
                name: 'Pending Todo',
                text: 'Todo will be created in a jiffy',
            },
        },
    });
};
