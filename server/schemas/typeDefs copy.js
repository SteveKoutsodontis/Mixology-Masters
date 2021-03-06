 const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String!
  }

  // type CartItem {
  //     _id: ID
  //     product: Product
  //     quantity: Int
  //   }
  
  type Product {
    _id: ID
    name: String!
    image: String!
    quantity: Int!
    description: String
    ingredients: [String]
    price: Float!
    category: Category!
  }

  type Order {
    _id: ID
    purchaseDate: String
    eventDate: String
    products: [Product]

  }

  type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    orders: [Order]
    // cartItems:[CartItem]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products: [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    // addCartItem(products:[ID]!,quantity:Int): CartItem
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    addProduct(name: String!, description: String, quantity: Int!, price: Float!, image: String!, ingredients: [String], category: ID!): Product
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
    logout(email: String!): Auth
  }
`;

module.exports = typeDefs;
