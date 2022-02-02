import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerRoutes from './DrawerRoutes';
import useAuth from '../hooks/useAuth';
import AuthRoutes from './AuthRoutes';
import {getToken} from '../utils/storage';
import Header from '../components/Header';

const AppRoutes = () => {
  const {token, setToken} = useAuth();
  useEffect(() => {
    (async () => {
      const token = await getToken();
      if (token) setToken(token);
    })();
  }, [token]);
  return (
    <NavigationContainer>
      <Header />
      {token ? <DrawerRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default AppRoutes;
