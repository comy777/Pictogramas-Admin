import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {colorIcon} from '../styles/globalStyles';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerIcons}>
        <Text style={styles.title}>Pictogramas</Text>
        <Icon name="heart-half-outline" size={24} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    backgroundColor: colorIcon,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 25,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
});

export default Header;
