/**
 * Internal dependencies.
 */
import gql from 'graphql-tag';

const createTodo = gql`
    mutation CreateTodo($input: CreateTodoInput!) {
        createTodo(input: $input) {
            id
            name
        }
    }
`;

export default {
    createTodo,
};
