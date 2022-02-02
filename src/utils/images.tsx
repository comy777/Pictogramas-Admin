import {ImageResponse} from '../reducers/productReducer';
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';

export const galeryLaunch = async () => {
  const resp: ImagePickerResponse = await launchImageLibrary({
    mediaType: 'photo',
    includeBase64: true,
  });
  if (resp.didCancel) return;
  if (!resp.assets) return;
  const {uri, base64} = resp.assets[0];
  if (uri && base64) {
    return {
      uri,
      base64,
    };
  }
};

export const cameraLaunch = async () => {
  const resp = await launchCamera({
    mediaType: 'photo',
    includeBase64: true,
  });
  if (resp.didCancel) return;
  if (resp.assets) {
    const {uri, base64} = resp.assets[0];
    if (uri && base64) {
      return {
        uri,
        base64,
      };
    }
  }
};

export const savePhoto = async ({base64}: ImageResponse) => {
  const base64Img = `data:image/jpg;base64,${base64}`;
  const data = {
    file: base64Img,
    upload_preset: 'react-journal',
  };
  const resp = await fetch('https://api.cloudinary.com/v1_1/djtqfpw2e/upload', {
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
  }).then(async res => await res.json());
  return resp.url;
};
