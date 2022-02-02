import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colorIcon} from '../styles/globalStyles';

interface Props {
  text: string;
}

const ListEmpty = ({text}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: colorIcon,
  },
});

export default ListEmpty;
