/**
 * Internal dependencies.
 */
import gql from 'graphql-tag';

const signIn = gql`
    mutation SignIn($input: SignInInput!) {
        signIn(input: $input) {
            id
            name
            api_token
        }
    }
`;

const signUp = gql`
    mutation SignUp($input: SignUpInput!) {
        signUp(input: $input) {
            id
            name
            api_token
        }
    }
`;

export default {
    signIn,
    signUp,
};
