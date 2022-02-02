import React, {createContext, useReducer} from 'react';
import {authReducer, AuthState} from '../reducers/authReducer';

export interface AuthStateProps {
  token: string | null;
  loading: boolean;
  uid: string | null;
  setToken: (token: string) => void;
  setLoading: () => void;
  restoreLoading: () => void;
  restoreToken: () => void;
}

const initialStateAuth: AuthState = {
  token: null,
  loading: false,
  uid: null,
};

export const AuthContext = createContext({} as AuthStateProps);

export const AuthProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(authReducer, initialStateAuth);
  const setToken = (token: string) =>
    dispatch({type: 'set token', payload: {token}});
  const setLoading = () => dispatch({type: 'set loading'});
  const restoreLoading = () => dispatch({type: 'restore loading'});
  const restoreToken = () => dispatch({type: 'restore token'});
  return (
    <AuthContext.Provider
      value={{...state, setToken, setLoading, restoreLoading, restoreToken}}>
      {children}
    </AuthContext.Provider>
  );
};
