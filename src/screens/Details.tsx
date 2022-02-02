import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import {RootDrawerProps} from '../routes/DrawerRoutes';
import {colorIcon} from '../styles/globalStyles';
import useProduct from '../hooks/useProduct';
import {showAlert} from '../utils/alert';
import useContextProduct from '../hooks/useContextProduct';
import Loading from '../components/Loading';

interface Props extends DrawerScreenProps<RootDrawerProps, 'details'> {}

const Details = ({route, navigation}: Props) => {
  const {product} = route.params;
  const {name, description, img, price, id} = product;
  const {handleDelete} = useProduct();
  const {loading, setLoading, restoreLoading} = useContextProduct();
  const showAlertDelete = () => {
    showAlert({
      title: 'Elimnar',
      message: 'Seguro?',
      onPress: async () => {
        setLoading();
        await handleDelete(id);
        restoreLoading();
        navigation.goBack();
      },
    });
  };
  const handleEdit = () => navigation.navigate('edit', {product});
  return (
    <View style={{flex: 1}}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: img
              ? img
              : 'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png',
          }}
          style={styles.img}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{name}</Text>
        </View>
        <ScrollView style={styles.containerDesc}>
          <Text style={styles.textDesc}>
            {description ? description : 'Descripcion'}
          </Text>
        </ScrollView>
        <View style={styles.price}>
          <Text style={styles.title}>Precio: $ {price}</Text>
        </View>
        {loading && <Loading />}
        <View style={styles.containerIcons}>
          <Icon
            name="pencil-outline"
            size={28}
            color="white"
            onPress={handleEdit}
          />
          <Icon
            name="trash"
            size={28}
            color="white"
            onPress={showAlertDelete}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: 350,
    width: '100%',
  },
  img: {height: 350},
  container: {
    padding: 15,
    flex: 1,
  },
  containerDesc: {flex: 0.4},
  textDesc: {fontSize: 18},
  containerTitle: {flex: 0.2},
  title: {fontSize: 24, fontWeight: 'bold', color: colorIcon},
  price: {alignItems: 'flex-end', flex: 0.2, paddingBottom: 15},
  containerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 0.2,
    backgroundColor: colorIcon,
  },
});

export default Details;
