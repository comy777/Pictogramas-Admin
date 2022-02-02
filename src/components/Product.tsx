import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const Product = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}></View>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
  },
  card: {
    borderWidth: 2,
    borderColor: 'teal',
    borderRadius: 15,
    flex: 1,
  },
});

export default Product;
