import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {GetProduct} from '../interfaces/interfaces';
import {colorIcon} from '../styles/globalStyles';
import {useNavigation} from '@react-navigation/native';
import useContextProduct from '../hooks/useContextProduct';

const {width} = Dimensions.get('window');

const ProductCard = (product: GetProduct) => {
  const navigation = useNavigation();
  const {setProductId, restoreImage} = useContextProduct();
  const handleSubmit = () => {
    setProductId(product.id);
    restoreImage();
    navigation.navigate('details', {product});
  };
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={handleSubmit}>
        <View style={styles.containerText}>
          <Text style={styles.cardTitle}>{product.name}</Text>
        </View>
        <View>
          <Image
            source={{
              uri: product.img
                ? product.img
                : 'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png',
            }}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 250,
    width: width / 2 - 10,
    marginBottom: 15,
    marginHorizontal: 5,
    position: 'relative',
  },
  containerText: {
    position: 'absolute',
    bottom: -30,
    zIndex: 9999,
    right: 0,
    marginRight: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colorIcon,
  },
  image: {
    height: 220,
    width: '100%',
    borderRadius: 15,
    resizeMode: 'contain',
  },
});

export default ProductCard;
