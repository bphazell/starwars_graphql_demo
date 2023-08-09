const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { readFileSync } = require('fs');
const gql = require('graphql-tag');
const typeDefs = gql(readFileSync('./reviews-schema.graphql', { encoding: 'utf-8' }));
const resolvers = require("./resolvers");
const ReviewsAPI = require("./datasources/reviews-api");


async function startApolloServer() {
    const server = new ApolloServer({ 
        typeDefs,
        resolvers, });

    const port = 4005
    const subgraphName = 'Reviews'
    const { url } = await startStandaloneServer(server, {

        context: async () => {
            const { cache } = server;
            return {
              dataSources: {
                reviewsAPI: new ReviewsAPI({ cache }),
              }
            };
          },
        listen: { port }
    });
    console.log(`
      🚀  Server ${subgraphName} is running!
      📭  Query at ${url}
    `);
  }

  startApolloServer();