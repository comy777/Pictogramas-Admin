import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {LOCALHOST} from '@env';
import {getToken} from '../utils/storage';

const httpLink = createHttpLink({
  uri: LOCALHOST,
});

const authLink = setContext(async (_, {headers}) => {
  const token = await getToken();
  return {
    headers: {
      ...headers,
      authorization: token ? token : '',
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
