import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {authStyles} from '../../styles/authStyles';
import {StackScreenProps} from '@react-navigation/stack';
import TextInputIcon from '../../components/TextInputIcon';
import useForm from '../../hooks/useForm';
import {showToast} from '../../components/Toast';
import useAuth from '../../hooks/useAuth';
import Loading from '../../components/Loading';

interface Props extends StackScreenProps<any, any> {}

const LoginScreen = ({navigation}: Props) => {
  const handleNavigate = () => navigation.navigate('register');
  const {loading, handleAuthLogin} = useAuth();
  const [icon, setIcon] = useState(true);
  const {email, password, onChange} = useForm({email: '', password: ''});
  const handleSubmit = async () => {
    if (!email || !password) {
      showToast('Todos los campos son requeridos');
      return;
    }
    await handleAuthLogin({email, password});
  };
  return (
    <View style={authStyles.container}>
      <View style={authStyles.inputContainer}>
        <TextInput
          placeholder="Correo electronico"
          style={authStyles.input}
          value={email}
          onChangeText={value => onChange(value, 'email')}
          keyboardType="email-address"
        />
        <TextInputIcon
          placeHolder="Contraseña"
          iconName={icon ? 'eye-outline' : 'eye-off-outline'}
          onChange={value => onChange(value, 'password')}
          value={password}
          setIcon={() => setIcon(!icon)}
          visible={icon}
        />
      </View>
      {loading && <Loading />}
      <View style={authStyles.btnContainer}>
        <View style={authStyles.btn}>
          <TouchableOpacity onPress={handleSubmit}>
            <Text style={authStyles.btnText}>Ingresar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={authStyles.btnRegister}>
        <TouchableOpacity onPress={handleNavigate}>
          <Text style={authStyles.btnRegisterText}>Crear cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
