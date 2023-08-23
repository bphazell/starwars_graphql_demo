const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { buildSubgraphSchema } = require("@apollo/subgraph"); 
// const typeDefs = require("./people-schema");
const { readFileSync } = require('fs');
const gql = require('graphql-tag');
const typeDefs = gql(readFileSync('./people-schema.graphql', { encoding: 'utf-8' }));

const resolvers = require("./resolvers");
const PeopleAPI = require("./datasources/people-api");


async function startApolloServer() {
    const server = new ApolloServer({
        schema: buildSubgraphSchema({ typeDefs, resolvers }), 
      });

    const port = 4001;
    const subgraphName = 'People'
    const { url } = await startStandaloneServer(server, {
        context: async () => {
            const { cache } = server;
            return {
                dataSources: {
                    peopleAPI: new PeopleAPI({ cache }),
                },
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