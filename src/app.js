import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import typeDefs from './type-def';
import resolvers from './resolver';
import env from './environment';

export default class App {
  constructor() {
    this.app = express();
  }

  init() {
    this.configureMiddleware();
    this.createServer();
    this.run();
  }

  createServer() {
    this.server = new ApolloServer({
      typeDefs,
      resolvers,
      playground: !env.isProd,
    });
    this.server.applyMiddleware({ app: this.app, path: '/api' });
  }

  configureMiddleware() {}

  run() {
    this.app.listen({ port: env.app.APP_PORT }, () => console.log(
      `Server listening on http://localhost:${env.app.APP_PORT}${this.server.graphqlPath}`,
    ));
  }
}
