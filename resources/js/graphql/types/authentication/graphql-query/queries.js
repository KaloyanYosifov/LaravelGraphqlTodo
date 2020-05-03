/**
 * Internal dependencies.
 */
import gql from 'graphql-tag';

export const getCurrentUser = gql`
    query GetCurrentUser {
        user: me {
            id
            name
        }
    }
`;
