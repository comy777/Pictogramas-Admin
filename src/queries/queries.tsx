import {gql} from '@apollo/client';

export const GET_PRODUCTS = gql`
  query getProducts {
    getProducts {
      id
      name
      price
      category
      description
      available
      img
    }
  }
`;

export const SAVE_PRODUCT = gql`
  mutation addProduct($input: ProductInput) {
    addProduct(input: $input)
  }
`;

export const GET_CATEGORIES = gql`
  query getCategories {
    getCategories {
      id
      name
    }
  }
`;
