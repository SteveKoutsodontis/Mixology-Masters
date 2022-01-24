import { gql } from '@apollo/client';
// ingredients[]???
// export const QUERY_PRODUCTS = gql`
//   query getProducts($category: ID) {
//     products(category: $category) {
//       _id
//       name
//       description
//       price
//       quantity
//       image
//       category {
//         _id
//       }
//     }
//   }
// `;

export const QUERY_COCKTAILS = gql`
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

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;
// ingredients[]???
export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      image
      description
      price
      quantity
      
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

// ingredients[] ???
export const QUERY_USER = gql`
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
