import {ImageResponse} from '../reducers/productReducer';
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {API_URL} from '@env';

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
  const resp = await fetch(API_URL, {
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
  }).then(async res => await res.json());
  return resp.url;
};
