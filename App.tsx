import 'react-native-gesture-handler';
import React from 'react';
import AppRoutes from './src/routes/AppRoutes';
import {ApolloProvider} from '@apollo/client';
import {client} from './src/apollo/client';
import {ProductProvider} from './src/context/productContext';
import {AuthProvider} from './src/context/authContext';

const AppState = ({children}: any) => {
  return (
    <AuthProvider>
      <ProductProvider>{children}</ProductProvider>
    </AuthProvider>
  );
};

const App = () => {
  return (
    <AppState>
      <ApolloProvider client={client}>
        <AppRoutes />
      </ApolloProvider>
    </AppState>
  );
};

export default App;
