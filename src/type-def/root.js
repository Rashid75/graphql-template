import { gql } from "apollo-server-express";

export default gql`
  type Query {
    #Because root query could not be empty
    _: String
  }
  type Mutation {
    #Because root mutation could not be empty
    _: String
  }
`;

