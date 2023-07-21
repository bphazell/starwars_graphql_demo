
const resolvers = {

    Query: {
        allPeople: (_, __, { dataSources }) => {
            return dataSources.peopleAPI.getAllPeople()
            // need to figure out how to parse ["results"] from response
        },

        person: (_, { id }, { dataSources }) => {
            return dataSources.peopleAPI.getPerson(id);
        },

    }

};

module.exports = resolvers;