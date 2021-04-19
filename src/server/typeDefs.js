const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    allBooks: [Book!]!
    detailBook(id: ID!): Book!
    cartItems: [Cart]
  }
  type Book {
    id: ID!
    title: String!
    author: String!
    price: Int!
    pages: Int!
    publisher: String!
    published_year: Int!
  }
  type Cart {
    title: String
    author: String
    price: Int
  }
  type Mutation {
    addBook(title: String!,author: String!,price: Int!,pages: Int!,publisher: String!,published_year: Int!): Book!
    addToCart(id: ID!): Cart
  }
`;

module.exports = typeDefs;