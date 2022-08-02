const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Favorites {
    _id: ID
    name: String
    lat: Float
    long: Float
  }
  type User {
    _id: ID
    username: String
    email: String
    favorites: [Favorites]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addFavorite( name: String!, lat: Float!, long: Float!): Favorites
    
  }
`;

module.exports = typeDefs;
