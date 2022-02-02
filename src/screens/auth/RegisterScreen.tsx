import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import TextInputIcon from '../../components/TextInputIcon';
import Loading from '../../components/Loading';
import {authStyles} from '../../styles/authStyles';
import useForm from '../../hooks/useForm';
import {showToast} from '../../components/Toast';
import useAuth from '../../hooks/useAuth';

const RegisterScreen = () => {
  const {username, email, password, repeatPassword, onChange} = useForm({
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
  });
  const {handleAuthRegister, loading} = useAuth();
  const [icon, setIcon] = useState(true);
  const handleSubmit = async () => {
    if (password !== repeatPassword) {
      showToast('Las contraseñas no coinciden');
      return;
    }
    if (password.length <= 8) {
      showToast('La contraseña debe tener mas de 8 caracteres');
      return;
    }
    const user = {username, email, password};
    await handleAuthRegister(user);
  };
  return (
    <View style={authStyles.container}>
      <View style={authStyles.inputContainer}>
        <TextInput
          placeholder="Nombres"
          style={authStyles.input}
          value={username}
          onChangeText={value => onChange(value, 'username')}
        />
        <TextInput
          placeholder="Correo electronico"
          style={authStyles.input}
          value={email}
          onChangeText={value => onChange(value, 'email')}
        />
        <TextInputIcon
          value={password}
          onChange={value => onChange(value, 'password')}
          placeHolder="Contraseña"
          iconName={icon ? 'eye-outline' : 'eye-off-outline'}
          setIcon={() => setIcon(!icon)}
          visible={icon}
        />
        <TextInput
          placeholder="Repetir contraseña"
          style={authStyles.input}
          value={repeatPassword}
          onChangeText={value => onChange(value, 'repeatPassword')}
          secureTextEntry={icon}
        />
      </View>
      {loading && <Loading />}
      <View style={authStyles.btnContainer}>
        <View style={authStyles.btn}>
          <TouchableOpacity onPress={handleSubmit}>
            <Text style={authStyles.btnText}>Crear cuenta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;
