const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type AlcoholCategory {
    _id: ID
    name: String
  }

  type CocktailKit {
    _id: ID
    name: String
    image: String
    quantity: Int
    didYouKnow: String
    ingredients: [String]
    price: Float
    alcoholCategory: AlcoholCategory
  }

  type Order {
    _id: ID
    purchaseDate: String
    eventDate: String
    cocktailKits: [CocktailKit]
    addOnsFoods: [AddOnsFoods]
    addOnsZoom: [AddOnsZoom]

  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    alcoholCategories: [AlcoholCategory]
    cocktailKits(alcoholCategory: ID, name: String): [CocktailKit]
    cocktailKit(_id: ID!): CocktailKit
    user: User
    order(_id: ID!): Order
    checkout(cocktailKits: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateCocktailKit(_id: ID!, quantity: Int!): CocktailKit
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
