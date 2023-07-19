const gql = require("graphql-tag");

const typeDefs = gql`
    type Query {
        listAllPeople: [Person!]!
        person(id: ID!): Person
    }

    type Person {
        id: ID!
        name: String!
        height: String
        mass: Int
        skin_color: String
        eye_color: String
        birth_year: String
        gender: String

    }
`;
module.exports = typeDefs;