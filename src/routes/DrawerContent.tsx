import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {restoreTokenStorage} from '../utils/storage';
import useAuth from '../hooks/useAuth';

interface Props extends DrawerContentComponentProps {}
const DrawerContent = (props: Props) => {
  const {loading, restoreToken} = useAuth();
  const handleLogout = async () => {
    await restoreTokenStorage();
    restoreToken();
  };
  const {navigation} = props;
  return (
    <DrawerContentScrollView>
      <DrawerItem
        label="Home"
        onPress={() => navigation.navigate('home')}
        activeTintColor="teal"
        activeBackgroundColor="teal"
      />
      <DrawerItem label="Configuracion" onPress={() => console.log('config')} />
      <View style={{paddingHorizontal: 15}}>
        <Text>Tema</Text>
      </View>
      <DrawerItem label="Cuenta" onPress={() => console.log('config')} />
      <View style={{paddingHorizontal: 15}}>
        <TouchableOpacity onPress={handleLogout}>
          <Text>Cerrar sesion</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
