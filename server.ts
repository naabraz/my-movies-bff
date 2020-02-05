import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import cors from 'cors';
import schema from './src/schema';

const app = express();
const server = new ApolloServer({
  schema
});

app.use('*', cors());

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = createServer(app);
httpServer.listen(
  { port: 3000 },
  (): void => console.log(`🚀 GraphQL is now running on http://localhost:3000/graphql`));
