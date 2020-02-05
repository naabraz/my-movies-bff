import 'graphql-import-node';
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';

import { types } from './types';
import { resolvers } from './resolvers';

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: types,
  resolvers,
});

export default schema;
