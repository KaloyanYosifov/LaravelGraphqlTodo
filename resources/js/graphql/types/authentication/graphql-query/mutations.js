/**
 * Internal dependencies.
 */
import gql from 'graphql-tag';

export const signIn = gql`
    mutation SignIn($input: SignInInput!) {
        signIn(input: $input) {
            id
            name
            api_token
        }
    }
`;
