import { ApolloServer } from 'apollo-server';

const typeDefs = `
	type Query {
		info: String!
	}
`;

const resolvers = {
	Query: {
		info: () => 'This is the API for Adventurer\'s Guild!'
	}
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));

