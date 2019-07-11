import React from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloProvider } from 'react-apollo';
import { ApolloLink } from 'apollo-link';   
import Store from "../store";
import { Provider as ReduxProvider } from 'react-redux';
import { notification } from 'antd';

const cheReactAdapter = (props) => {

    const onMessageTitle = (type,message) => {
        notification[type]({
          duration:1,
          message: '提示信息',
          description:message,
        });
      }
      
    const client = new ApolloClient({
        link: ApolloLink.from([
            onError(({ graphQLErrors, networkError }) => {
                if (graphQLErrors)
                    graphQLErrors.map(({ message, locations, path }) =>
                        onMessageTitle('error',message)
                    );
            }),
            new HttpLink({
                uri: 'http://localhost:3000/graphql',
                credentials: 'same-origin'
            })
        ]),
        cache: new InMemoryCache()
    });

    const { children } = props;

    return (
        <ApolloProvider client={client}>
            <ReduxProvider store={Store}>
                {children}
            </ReduxProvider>
        </ApolloProvider>
    );
}

export default cheReactAdapter;