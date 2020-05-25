import {ApolloServer} from 'apollo-server-express'
import express from 'express'
import typeDefs from './type-def'
import resolvers from './resolver'
import env from './environment'

const app= express();

const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  server.applyMiddleware({app})

  app.listen({ port: env.app.APP_PORT }, () =>
  console.log(`Server listening on http://localhost:${env.app.APP_PORT}${server.graphqlPath}`)
)