export interface ImageResponse {
  uri: string;
  base64: string;
}

type ProductAction =
  | {type: 'set modal'}
  | {type: 'restore modal'}
  | {type: 'set image'; payload: {url: string}}
  | {type: 'restore image'}
  | {type: 'set image picker'; payload: {image: ImageResponse}}
  | {type: 'set loading'}
  | {type: 'restore loading'}
  | {type: 'set id product'; payload: {id: string}};

export interface ProductState {
  modal: boolean;
  image: ImageResponse;
  loading: boolean;
  idProduct: string;
}

export const productReducer = (
  state: ProductState,
  action: ProductAction,
): ProductState => {
  switch (action.type) {
    case 'set modal':
      return {
        ...state,
        modal: true,
      };
    case 'restore modal':
      return {
        ...state,
        modal: false,
      };
    case 'set image picker':
      return {
        ...state,
        image: action.payload.image,
      };
    case 'restore image':
      return {
        ...state,
        image: {uri: '', base64: ''},
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
    case 'set id product':
      return {
        ...state,
        idProduct: action.payload.id,
      };
    default:
      return state;
  }
};
