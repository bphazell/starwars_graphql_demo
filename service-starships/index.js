const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./starships-schema");
const resolvers = require("./resolvers");
const StarshipsAPI = require("./datasources/starships-api");


async function startApolloServer() {
    const server = new ApolloServer({ typeDefs,
                                      resolvers,
                                    });

    const port = 4003;
    const subgraphName = 'Starships'
    const { url } = await startStandaloneServer(server, {
        context: async () => {
            // this object becomes our resolver's contextValue, the third positional argument
            const { cache } = server;
            return {
              dataSources: {
                starshipsAPI: new StarshipsAPI({ cache }),
              }
            };
          },
        listen: { port}
    });
    console.log(`
    🚀  Server ${subgraphName} is running!
    📭  Query at ${url}
  `);
  }

startApolloServer();