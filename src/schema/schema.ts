import 'graphql-import-node';
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';

import { types } from '../types';
import { resolvers } from '../resolvers';

export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: types,
  resolvers,
});
