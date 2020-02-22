import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { createServer } from 'http';
import { schema } from './src/schema';

dotenv.config();

const app = express();
const server = new ApolloServer({ schema });

app.use('*', cors());

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = createServer(app);
httpServer.listen({ port: 3000 }, (): void =>
  console.log(`🚀 GraphQL is running on http://localhost:3000/graphql`),
);
