import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colorIcon} from '../styles/globalStyles';

const Fab = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.fab}>
      <Icon
        name="add"
        onPress={() => navigation.navigate('product')}
        size={40}
        color="white"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 15,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: colorIcon,
    backgroundColor: colorIcon,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Fab;
