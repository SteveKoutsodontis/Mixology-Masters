import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_CART_ITEM = gql`
  mutation addCartItem($products: [ID]!, $quantity: Int) {
  addCartItem(products: $products, quantity: $quantity) {
  product {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
    }
  }
}
`;


export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      eventDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

// ingredients[]???
export const ADD_PRODUCT = gql`
mutation addProduct($name: String!, $description: String, $quantity: Int!,$price: Float!,$image:String!, $ingredients: [String], $category:ID!) {
  addProduct (name: $name, description: $description, quantity: $quantity, price: $price, image:$image, ingredients:$ingredients,category: $category){
      _id
      name
      description
    	quantity
      price
      image
    
      category {
        _id
      }
     }
}`