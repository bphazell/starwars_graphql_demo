
const resolvers = {

    Query: {
        allPeople: (_, __, { dataSources }) => {
            return dataSources.peopleAPI.getAllPeople()
            // need to figure out how to parse ["results"] from response
        },

        person: (_, { id }, { dataSources }) => {
            return dataSources.peopleAPI.getPerson(id);
        },
    },

    Person: {
        species: ({ species }, _, { dataSources }) => {
            console.log(species[0])
            if (typeof species[0] != "undefined"){
                return dataSources.peopleAPI.getSpecies(species[0])
            } else {
                return null
            }
        }
    },


};

module.exports = resolvers;