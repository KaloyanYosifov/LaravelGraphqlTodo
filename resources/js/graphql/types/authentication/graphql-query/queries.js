/**
 * Internal dependencies.
 */
import gql from 'graphql-tag';

const getCurrentUser = gql`
    query GetCurrentUser {
        user: me {
            id
            name
        }
    }
`;

export default {
    getCurrentUser,
};
