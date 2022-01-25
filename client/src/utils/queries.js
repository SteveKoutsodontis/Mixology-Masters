import { gql } from '@apollo/client';

const QUERY_COCKTAILS = gql`
  query getCocktails{
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

<<<<<<< HEAD
export const QUERY_PRODUCT = gql`
  query getProduct($product: ID!) {
    product(product: $product) {
=======
export const QUERY_COCKTAIL = gql`
  query getCocktail($category: ID) {
    products(category: $category) {
>>>>>>> 3479b11a16464f306aeda17de4eac9661220ed92
      _id
      name
      description
      price
      quantity
<<<<<<< HEAD
      ingredients
=======
>>>>>>> 3479b11a16464f306aeda17de4eac9661220ed92
      image
      category {
        _id
      }
    }
  }
`;


const QUERY_CARTITEMS = gql`
  query getCartItems{
    cartItems {
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
      firstName
      lastName
      orders {
        _id
        purchaseDate
        eventDate
        products {
          _id
          name
          description
        
          price
          quantity
          image
        }
      }
    }
  }
`;

export { QUERY_COCKTAILS, QUERY_CHECKOUT, QUERY_CATEGORIES, QUERY_USER, QUERY_CARTITEMS}

