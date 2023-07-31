const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { buildSubgraphSchema } = require("@apollo/subgraph"); 
// const typeDefs = require("./planets-schema");

const { readFileSync } = require('fs');
const gql = require('graphql-tag');
const typeDefs = gql(readFileSync('./planets-schema.graphql', { encoding: 'utf-8' }));

const resolvers = require("./resolvers");
const PlanetsAPI = require("./datasources/planets-api");


async function startApolloServer() {
    const server = new ApolloServer({ 
      schema: buildSubgraphSchema({ typeDefs, resolvers }), 
      });

    const port = 4002;
    const subgraphName = 'Planets'
    const { url } = await startStandaloneServer(server, {
        context: async () => {
            // this object becomes our resolver's contextValue, the third positional argument
            const { cache } = server;
            return {
              dataSources: {
                planetsAPI: new PlanetsAPI({ cache }),
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