import useContextProduct from './useContextProduct';
import {cameraLaunch, galeryLaunch} from '../utils/images';

const useImages = () => {
  const {setImagePicker, restoreModal} = useContextProduct();
  const setImageCamera = async () => {
    const resp = await cameraLaunch();
    if (resp) {
      setImagePicker(resp);
      restoreModal();
    }
  };
  const setImageGalery = async () => {
    const resp = await galeryLaunch();
    if (resp) {
      setImagePicker(resp);
      restoreModal();
    }
  };
  return {
    setImageCamera,
    setImageGalery,
  };
};

export default useImages;
