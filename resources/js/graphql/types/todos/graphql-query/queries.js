/**
 * Internal dependencies.
 */
import gql from 'graphql-tag';

const getTodos = gql`
    query GetTodos($input: FindTodoInput, $page: Int) {
        user: me {
            id
            todos(input: $input, page: $page) {
                data {
                    id
                    name
                }
                paginatorInfo {
                    hasMorePages
                }
            }
        }
    }
`;

export default {
    getTodos,
};
