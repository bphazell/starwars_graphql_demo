const gql = require("graphql-tag");

const typeDefs = gql`

    type Query {
        planet(id: ID): Planet
    }

    type Planet {
        name: String!
        climate: String
        population: String
        gravity: String
        terrain: String
        diameter: String
    }


`

module.exports = typeDefs;