import { gql } from "@apollo/client";
const QUERY_COCKTAILS = gql`
  query getCocktails {
    products {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;
const QUERY_PRODUCT = gql`
  query getProduct($product: ID!) {
    product(_id: $product) {
      _id
      name
      description
      price
      quantity
      ingredients
      image
      category {
        _id
      }
    }
  }
`;

const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;
const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;
const QUERY_USER = gql`
  {
    user {
      _id
      firstName
      lastName
      cartItems {
          _id
          name
          price
          image
        }
      }
    }
  }
`;

export {
  QUERY_COCKTAILS,
  QUERY_CHECKOUT,
  QUERY_CATEGORIES,
  QUERY_USER,
  QUERY_PRODUCT,
};
