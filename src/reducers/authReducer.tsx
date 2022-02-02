type AuthActions =
  | {type: 'set token'; payload: {token: string}}
  | {type: 'set loading'}
  | {type: 'restore loading'}
  | {type: 'set uid user'; payload: {uid: string}}
  | {type: 'restore uid user'}
  | {type: 'restore token'};

export interface AuthState {
  token: string | null;
  loading: boolean;
  uid: string | null;
}

export const authReducer = (
  state: AuthState,
  action: AuthActions,
): AuthState => {
  switch (action.type) {
    case 'set token':
      return {
        ...state,
        token: action.payload.token,
      };
    case 'set loading':
      return {
        ...state,
        loading: true,
      };
    case 'restore loading':
      return {
        ...state,
        loading: false,
      };
    case 'restore token':
      return {
        ...state,
        token: '',
      };
    default:
      return state;
  }
};
