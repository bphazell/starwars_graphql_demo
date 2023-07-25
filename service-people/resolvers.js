
const resolvers = {

    Query: {
        allPeople: (_, { page }, { dataSources }) => {
            return dataSources.peopleAPI.getAllPeople(page)
        },

        person: (_, { id }, { dataSources }) => {
            return dataSources.peopleAPI.getPerson(id);
        },
    },

    Person: {
        species: ({ species }, _, { dataSources }) => {
            // extracts species id from full API call 
            const species_id = species[0].slice(-2, -1)
            if (typeof species_id != "undefined"){
                return dataSources.peopleAPI.getSpecies(species_id)
            } else {
                return null
            }
        }
    },

    resultsList: {
        people: ( { results }) => {
            return results
        }
    },


};

module.exports = resolvers;