const gql = require("graphql-tag");

const typeDefs = gql`
    type Query {
        #Not Working
        allPeople: [Person!]!
        person(id: ID!): Person
    }

    type Person {
        name: String!
        height: String
        mass: Int
        skin_color: String
        eye_color: String
        birth_year: String
        gender: String
        homeworld: Planet
    }

    type Planet {
        name: String!
        climate: String
        population: String
        gravity: String
        terrain: String
        diameter: String
    }
`;
module.exports = typeDefs;