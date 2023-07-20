const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./people-schema");

const { addMocksToSchema } = require("@graphql-tools/mock");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const mocks = {
    Query: () => ({
        listAllPeople: () => [...new Array(6)],
      }),
    Person: () => ({
      id: () => "1",
      name: () => "Brian Skywalker",
      height: () => "5 8",
      mass: () => 11,
      skin_color: () => "pale",
      eye_color: () => "hazel",
      birth_year: () => "1988",
      gender: () => "m"
    }),
  };

async function startApolloServer() {
    const server = new ApolloServer({ 
        schema: addMocksToSchema({
            schema: makeExecutableSchema({ typeDefs }),
            mocks,
          }),
    });
    const { url } = await startStandaloneServer(server);
    console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
  }

  startApolloServer();


  