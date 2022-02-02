import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import DrawerContent from './DrawerContent';
import ProductScreen from '../screens/ProductScreen';
import Details from '../screens/Details';
import {GetProduct} from '../interfaces/interfaces';
import EditProductScreen from '../screens/EditProductScreen';

export type RootDrawerProps = {
  home: undefined;
  product: undefined;
  details: {product: GetProduct};
  edit: {product: GetProduct};
};

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="home" component={HomeScreen} />
      <Drawer.Screen name="product" component={ProductScreen} />
      <Drawer.Screen name="details" component={Details} />
      <Drawer.Screen name="edit" component={EditProductScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;
