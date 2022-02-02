import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {colorIcon} from '../styles/globalStyles';

interface Props {
  title: string;
  onPress: () => void;
}

const Btn = ({title, onPress}: Props) => {
  return (
    <View style={styles.btn}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.btnText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 50,
    width: 90,
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
  },
  btnText: {
    color: colorIcon,
    fontWeight: 'bold',
  },
});

export default Btn;
