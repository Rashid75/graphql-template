import { gql } from 'apollo-server-express';

export default gql`
   extend type Query {
    user(id:ID!): User
    users:[User!]!
  }
   extend type Mutation {
    create(firstName:String!, lastName:String!): User
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
  }
`;
