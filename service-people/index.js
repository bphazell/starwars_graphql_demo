const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./people-schema");
const resolvers = require("./resolvers");
const PeopleAPI = require("./datasources/people-api");


async function startApolloServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
      });
    const { url } = await startStandaloneServer(server, {
        context: async () => {
            const { cache } = server;
            return {
                dataSources: {
                    peopleAPI: new PeopleAPI({ cache }),
                }
            }
        }
    });
    console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
  }

  startApolloServer();