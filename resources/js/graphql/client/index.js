/**
 * External dependencies.
 */
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: `${window.globalLaravelContext.appUrl}/graphql`,
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('laravel_api_token');

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

// Create the apollo client
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;
