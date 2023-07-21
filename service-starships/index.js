const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
// const typeDefs = require("./starships-schema");
const { readFileSync } = require('fs');
const gql = require('graphql-tag');
const typeDefs = gql(readFileSync('./starships-schema.graphql', { encoding: 'utf-8' }));

const resolvers = require("./resolvers");
const StarshipsAPI = require("./datasources/starships-api");
const VehiclesAPI = require("./datasources/vehicles-api");


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
                vehiclesAPI: new VehiclesAPI({ cache }),
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