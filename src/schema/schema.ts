import { GraphQLSchema } from 'graphql';
import 'graphql-import-node';
import { makeExecutableSchema } from 'graphql-tools';

import { resolvers } from '~resolvers';
import { types } from '~types';

export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: types,
  resolvers,
});
