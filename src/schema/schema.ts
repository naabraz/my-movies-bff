import { GraphQLSchema } from 'graphql';
import 'graphql-import-node';
import { makeExecutableSchema } from 'graphql-tools';

import { resolvers } from '_resolvers';
import { types } from '_types';

export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: types,
  resolvers,
});
