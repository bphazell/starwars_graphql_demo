const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const { readFileSync } = require('fs');
const gql = require('graphql-tag');
const typeDefs = gql(readFileSync('./films-schema.graphql', { encoding: 'utf-8' }));

const resolvers = require("./resolvers");
const FilmsAPI = require("./datasources/films-api");


async function startApolloServer() {
    const server = new ApolloServer({ 
        typeDefs,
        resolvers,
     });
    const port = 4004;
    const subgraphName = 'Film'
    const { url } = await startStandaloneServer(server, {
        context: async () => {
            const { cache } = server;
            return {
                dataSources: {
                    filmsAPI: new FilmsAPI({ cache }),
                    },
            };
          },
        listen: { port }
    });
    console.log(`
      🚀  Server is running!
      📭  Query at ${url}
    `);
  }

startApolloServer();
