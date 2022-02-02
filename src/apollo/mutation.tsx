import {gql} from '@apollo/client';

export const REGISTER = gql`
  mutation register($input: RegisterInput) {
    register(input: $input) {
      token
    }
  }
`;

export const LOGIN = gql`
  mutation login($input: LoginInput) {
    login(input: $input) {
      token
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: ID!) {
    deleteProduct(id: $id)
  }
`;

export const EDIT_PRODUCT = gql`
  mutation editProduct($id: ID!, $input: EditProductInput) {
    editProduct(id: $id, input: $input)
  }
`;
