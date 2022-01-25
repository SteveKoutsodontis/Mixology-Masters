import { gql } from '@apollo/client';
// ingredients[]???
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

export const QUERY_COCKTAIL = gql`
  query getCocktail($category: ID) {
    products(category: $category) {
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
// ingredients[]???

const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

// ingredients[] ???
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

export { QUERY_COCKTAILS, QUERY_CHECKOUT, QUERY_CATEGORIES, QUERY_USER}

