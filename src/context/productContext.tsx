import React from 'react';
import {createContext, useReducer} from 'react';
import {
  ProductState,
  productReducer,
  ImageResponse,
} from '../reducers/productReducer';

export interface Product {
  id?: string | null;
  name: string;
  description: string;
  price: string;
  category: string;
  img?: string | null;
  available?: boolean;
}

interface ProductStateProps {
  modal: boolean;
  image: ImageResponse;
  loading: boolean;
  idProduct: string;
  setModal: () => void;
  restoreModal: () => void;
  setImage: (url: string) => void;
  restoreImage: () => void;
  setImagePicker: (image: ImageResponse) => void;
  setLoading: () => void;
  restoreLoading: () => void;
  setProductId: (id: string) => void;
}

const initialStateProduct: ProductState = {
  modal: false,
  image: {
    uri: '',
    base64: '',
  },
  loading: false,
  idProduct: '',
};

export const ProductContext = createContext({} as ProductStateProps);

export const ProductProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(productReducer, initialStateProduct);
  const setModal = () => dispatch({type: 'set modal'});
  const restoreModal = () => dispatch({type: 'restore modal'});
  const setImage = (url: string) =>
    dispatch({type: 'set image', payload: {url}});
  const restoreImage = () => dispatch({type: 'restore image'});
  const setImagePicker = (image: ImageResponse) =>
    dispatch({type: 'set image picker', payload: {image}});
  const setLoading = () => dispatch({type: 'set loading'});
  const restoreLoading = () => dispatch({type: 'restore loading'});
  const setProductId = (id: string) =>
    dispatch({type: 'set id product', payload: {id}});
  return (
    <ProductContext.Provider
      value={{
        ...state,
        setModal,
        restoreModal,
        setImage,
        restoreImage,
        setImagePicker,
        setLoading,
        restoreLoading,
        setProductId,
      }}>
      {children}
    </ProductContext.Provider>
  );
};
