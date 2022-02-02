import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import React, {useEffect} from 'react';
import {RootDrawerProps} from '../routes/DrawerRoutes';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {productStyles} from '../styles/globalStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import Modal from '../components/Modal';
import useForm from '../hooks/useForm';
import {useQuery} from '@apollo/client';
import {GET_CATEGORIES} from '../queries/queries';
import Loading from '../components/Loading';
import {DataCategory} from '../interfaces/interfaces';
import useProduct from '../hooks/useProduct';
import useContextProduct from '../hooks/useContextProduct';
import useImages from '../hooks/useImages';

interface Props extends DrawerScreenProps<RootDrawerProps, 'edit'> {}

const EditProductScreen = ({navigation, route}: Props) => {
  const {product} = route.params;
  useEffect(() => {
    reset();
  }, [product]);
  const {name, description, price, onChange, img, reset} = useForm(product);
  const {
    category,
    setCategory,
    loading: loadingProduct,
    handleEditProduct,
  } = useProduct();
  const {setModal, image} = useContextProduct();
  const {uri} = image;
  const {setImageCamera, setImageGalery} = useImages();
  const priceString = price.toString();
  const {data, loading} = useQuery(GET_CATEGORIES);
  if (loading) return <Loading />;
  const {getCategories}: DataCategory = data;
  const handleSubmit = async () => {
    const product = {name, description, price: priceString, category, img};
    await handleEditProduct({product, reset});
    navigation.goBack();
  };
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <View style={productStyles.container}>
          <View style={productStyles.card}>
            <TouchableOpacity
              style={productStyles.imageContainer}
              onPress={setModal}>
              {image.uri ? (
                <Image
                  source={{
                    uri,
                  }}
                  style={{
                    height: '100%',
                    width: '100%',
                    resizeMode: 'cover',
                  }}
                />
              ) : (
                <Image
                  source={{
                    uri: product.img
                      ? product.img
                      : 'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png',
                  }}
                  style={{
                    height: '100%',
                    width: '100%',
                    resizeMode: 'cover',
                  }}
                />
              )}
            </TouchableOpacity>
            <Modal
              titleLeft="Camara"
              titleRight="Galeria"
              onPressLeft={setImageCamera}
              onPressRight={setImageGalery}
            />
            <View style={productStyles.form}>
              <TextInput
                placeholder="Producto"
                style={productStyles.input}
                value={name}
                onChangeText={value => onChange(value, 'name')}
              />
              <TextInput
                placeholder="Precio"
                style={productStyles.input}
                value={priceString}
                onChangeText={value => onChange(value, 'price')}
              />
              <Text
                style={{fontSize: 17, fontWeight: 'bold', marginBottom: 10}}>
                Categoria
              </Text>
              <View style={{...productStyles.input, paddingHorizontal: 0}}>
                <Picker
                  selectedValue={category}
                  onValueChange={(itemValue, itemIndex) =>
                    setCategory(itemValue)
                  }>
                  {getCategories.map(categorie => (
                    <Picker.Item
                      label={categorie.name}
                      value={categorie.id}
                      key={categorie.id}
                    />
                  ))}
                </Picker>
              </View>
              <ScrollView>
                <TextInput
                  placeholder="Descripcion"
                  style={{...productStyles.input, height: 190}}
                  multiline
                  value={description}
                  onChangeText={value => onChange(value, 'description')}
                />
              </ScrollView>
              {loadingProduct && <Loading />}
              <View style={productStyles.btnContainer}>
                <TouchableOpacity onPress={handleSubmit}>
                  <Text style={productStyles.btnText}>Editar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EditProductScreen;
