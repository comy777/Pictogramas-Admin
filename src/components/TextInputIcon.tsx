import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colorIcon} from '../styles/globalStyles';

interface Props {
  value: string;
  onChange: (value: string, name: string) => void;
  placeHolder: string;
  iconName?: string;
  setIcon?: () => void;
  visible?: boolean;
}

const TextInputIcon = ({
  value,
  onChange,
  placeHolder,
  iconName,
  setIcon,
  visible,
}: Props) => {
  return (
    <View style={styles.containerInput}>
      <TextInput
        style={styles.input}
        placeholder={placeHolder}
        value={value}
        onChangeText={value => onChange(value, 'password')}
        secureTextEntry={visible}
      />
      {iconName && (
        <Icon name={iconName} color={colorIcon} size={28} onPress={setIcon} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerInput: {
    height: 60,
    width: '100%',
    borderWidth: 2,
    borderColor: colorIcon,
    borderRadius: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  input: {
    fontSize: 17,
  },
});

export default TextInputIcon;
