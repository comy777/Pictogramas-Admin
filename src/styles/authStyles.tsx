import {StyleSheet} from 'react-native';
import {colorIcon} from './globalStyles';

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: 25,
  },
  input: {
    height: 60,
    width: '100%',
    borderWidth: 2,
    borderColor: colorIcon,
    borderRadius: 15,
    paddingLeft: 15,
    marginBottom: 15,
    fontSize: 17,
  },
  btnContainer: {
    alignItems: 'center',
  },
  btn: {
    height: 60,
    width: 180,
    backgroundColor: colorIcon,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnRegister: {
    alignItems: 'center',
    marginTop: 15,
  },
  btnRegisterText: {
    fontSize: 18,
    color: colorIcon,
  },
  containerLoading: {
    marginBottom: 15,
  },
});
