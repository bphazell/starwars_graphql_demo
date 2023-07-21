const gql = require("graphql-tag");

const typeDefs = gql`
    type Query {
        # Not Working
        starship(id: ID): Starship
    }

    type Starship {
        name: String!
        model: String
        manufacturer: String
        cost_in_credits: String
        length: String
        max_atmosphering_speed: String
        crew: String
        passengers: String
        cargo_capacity: String
        consumables: String
        hyperdrive_rating: String
        starship_class: String
    }

`;
module.exports = typeDefs;

