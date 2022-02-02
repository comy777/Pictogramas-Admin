import {useContext} from 'react';
import {AuthContext} from '../context/authContext';
import {useMutation} from '@apollo/client';
import {REGISTER, LOGIN} from '../apollo/mutation';
import {showToast} from '../components/Toast';
import {saveToken} from '../utils/storage';

interface User {
  username?: string;
  email: string;
  password: string;
}

const useAuth = () => {
  const [register] = useMutation(REGISTER);
  const [login] = useMutation(LOGIN);
  const {
    token,
    uid,
    loading,
    setToken,
    setLoading,
    restoreLoading,
    restoreToken,
  } = useContext(AuthContext);
  const handleAuthRegister = async (input: User) => {
    setLoading();
    try {
      const resp = await register({
        variables: {
          input,
        },
      });
      if (resp) {
        const {token} = resp.data.register;
        setToken(token);
        await saveToken(token);
        restoreLoading();
      }
    } catch (error: any) {
      showToast(error.message);
      restoreLoading();
    }
  };
  const handleAuthLogin = async (user: User) => {
    setLoading();
    const {email, password} = user;
    const input = {email, password};
    try {
      const resp = await login({
        variables: {
          input,
        },
      });
      if (resp) {
        const {token} = resp.data.login;
        setToken(token);
        await saveToken(token);
        restoreLoading();
      }
    } catch (error: any) {
      showToast(error.message);
      restoreLoading();
    }
  };
  return {
    token,
    uid,
    loading,
    handleAuthRegister,
    handleAuthLogin,
    setToken,
    setLoading,
    restoreLoading,
    restoreToken,
  };
};

export default useAuth;
