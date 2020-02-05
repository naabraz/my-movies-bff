import { IResolvers } from 'graphql-tools';

import { HelloWorldResolver } from './HelloWorld';

export const resolvers: IResolvers[] = [
  HelloWorldResolver
];
