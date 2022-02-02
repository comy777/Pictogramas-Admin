import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import useProduct from '../hooks/useProduct';
import {DataCategory} from '../interfaces/interfaces';
import Modal from '../components/Modal';
import {GET_CATEGORIES} from '../queries/queries';
import {useQuery} from '@apollo/client';
import useContextProduct from '../hooks/useContextProduct';
import useForm from '../hooks/useForm';
import {productStyles} from '../styles/globalStyles';
import useImages from '../hooks/useImages';
import Loading from '../components/Loading';

const ProductScreen = () => {
  const {data, loading} = useQuery(GET_CATEGORIES);
  const {image, setModal} = useContextProduct();
  const {
    category,
    setCategory,
    handleSubmitProduct,
    loading: loadingProduct,
  } = useProduct();
  const {name, description, price, onChange, reset} = useForm({
    name: '',
    description: '',
    price: '',
    img: '',
  });
  if (loading) return <Loading />;
  const {getCategories}: DataCategory = data;
  const handleSubmit = async () => {
    const product = {name, description, category, price};
    await handleSubmitProduct({product, reset});
  };
  const {setImageCamera, setImageGalery} = useImages();
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <View style={productStyles.container}>
          <View style={productStyles.card}>
            <View style={productStyles.imageContainer}>
              {image.uri ? (
                <Image
                  source={{uri: image.uri}}
                  style={{height: '100%', width: '100%', resizeMode: 'cover'}}
                />
              ) : (
                <TouchableOpacity onPress={setModal}>
                  <Text>Seleccione una imagen</Text>
                </TouchableOpacity>
              )}
              <Modal
                titleLeft="Camara"
                titleRight="Galeria"
                onPressLeft={setImageCamera}
                onPressRight={setImageGalery}
              />
            </View>
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
                value={price}
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
                  <Text style={productStyles.btnText}>Crear</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ProductScreen;
