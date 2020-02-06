import { IResolvers } from 'graphql-tools';

export const HelloWorldResolver: IResolvers = {
  Query: {
    helloWorld(_: void, args: void): string {
      return `👋 Hello world! 👋`;
    },
  },
};

export default HelloWorldResolver;
