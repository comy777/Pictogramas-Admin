import {Alert} from 'react-native';

interface Props {
  title: string;
  message: string;
  onPress?: () => void;
}

export const showAlert = ({title, message, onPress}: Props) => {
  Alert.alert(title, message, [
    {
      text: 'Cancel',
      style: 'cancel',
    },
    {
      text: title,
      onPress,
      style: 'destructive',
    },
  ]);
};
