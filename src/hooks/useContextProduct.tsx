import {useContext} from 'react';
import {ProductContext} from '../context/productContext';

const useContextProduct = () => {
  const {
    setModal,
    image,
    modal,
    restoreImage,
    restoreModal,
    setImage,
    setImagePicker,
    loading,
    setLoading,
    restoreLoading,
    setProductId,
    idProduct,
  } = useContext(ProductContext);
  return {
    setModal,
    image,
    modal,
    restoreImage,
    restoreModal,
    setImage,
    setImagePicker,
    loading,
    setLoading,
    restoreLoading,
    setProductId,
    idProduct,
  };
};

export default useContextProduct;
