import React from 'react';
import {useQuery} from '@apollo/client';
import {View, FlatList} from 'react-native';
import Fab from '../components/Fab';
import {GET_PRODUCTS} from '../queries/queries';
import {ProductResponse} from '../interfaces/interfaces';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';
import ListEmpty from '../components/ListEmpty';

const HomeScreen = () => {
  const {data, loading} = useQuery(GET_PRODUCTS);
  if (loading)
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Loading />
      </View>
    );
  const {getProducts}: ProductResponse = data;
  return (
    <View style={{flex: 1, marginTop: 15}}>
      <FlatList
        data={getProducts}
        keyExtractor={(item, i) => i.toString()}
        renderItem={({item}) => <ProductCard {...item} />}
        numColumns={2}
        ListEmptyComponent={() => <ListEmpty text="No hay productos aun" />}
      />
      <Fab />
    </View>
  );
};

export default HomeScreen;
