import {useState} from 'react';
import {useMutation} from '@apollo/client';
import {savePhoto} from '../utils/images';
import {SAVE_PRODUCT, GET_PRODUCTS} from '../queries/queries';
import useContextProduct from './useContextProduct';
import {Product} from '../context/productContext';
import {showToast} from '../components/Toast';
import {DELETE_PRODUCT, EDIT_PRODUCT} from '../apollo/mutation';

interface Props {
  product: Product;
  reset: () => void;
}

const useProduct = () => {
  const {image, restoreImage, loading, setLoading, restoreLoading} =
    useContextProduct();
  const [category, setCategory] = useState('');
  const {idProduct} = useContextProduct();
  const [addProduct] = useMutation(SAVE_PRODUCT, {
    refetchQueries: [GET_PRODUCTS],
  });
  const [deleteProduct] = useMutation(DELETE_PRODUCT, {
    refetchQueries: [GET_PRODUCTS],
  });
  const [editProduct] = useMutation(EDIT_PRODUCT, {
    refetchQueries: [GET_PRODUCTS],
  });
  const handleEditProduct = async ({product, reset}: Props) => {
    setLoading();
    const {name, description, price, category, img} = product;
    const priceNumber = parseFloat(price);
    let input = {
      name,
      description,
      price: priceNumber,
      category,
      img,
      available: true,
    };
    if (image) {
      const respCloudinary = await savePhoto(image);
      if (respCloudinary) {
        input.img = respCloudinary;
      }
    }
    try {
      const resp = await editProduct({
        variables: {
          id: idProduct,
          input,
        },
      });
      if (resp) {
        showToast(resp.data.editProduct);
        restoreLoading();
        reset();
      }
    } catch (error: any) {
      console.log(error);
      showToast(error.message);
      restoreLoading();
    }
    restoreLoading();
  };
  const handleSubmitProduct = async ({product, reset}: Props) => {
    setLoading();
    const {price, name, category, description, img} = product;
    const priceValue = parseFloat(price);
    let input = {name, category, description, price: priceValue, img};
    if (image) {
      const respPicker: string = await savePhoto(image);
      if (respPicker) {
        input.img = respPicker;
        restoreImage();
      }
    }
    try {
      const resp = await addProduct({
        variables: {
          input,
        },
      });
      if (resp) {
        showToast(resp.data.addProduct);
        reset();
        restoreLoading();
      }
    } catch (error: any) {
      showToast(error.message);
      restoreLoading();
    }
  };
  const handleDelete = async (id: string) => {
    setLoading();
    try {
      const resp = await deleteProduct({
        variables: {
          id,
        },
      });
      if (resp) {
        showToast(resp.data.deleteProduct);
        restoreLoading();
      }
    } catch (error: any) {
      showToast(error.message);
      restoreLoading();
    }
  };
  return {
    handleSubmitProduct,
    category,
    setCategory,
    handleDelete,
    loading,
    handleEditProduct,
  };
};

export default useProduct;
