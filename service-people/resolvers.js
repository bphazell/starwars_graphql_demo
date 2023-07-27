
const resolvers = {

    Query: {
        allPeople: (_, { page }, { dataSources }) => {
            return dataSources.peopleAPI.getAllPeople(page)
        },

        allSpecies: (_, { page }, { dataSources }) => {
            return dataSources.peopleAPI.getAllSpecies(page)
        },

        person: (_, { id }, { dataSources }) => {
            return dataSources.peopleAPI.getPerson(id);
        },
    },

    Person: {
        species: ({ species }, _, { dataSources }) => {
            if (species.length > 0){
                // extracts species id from full API call 
                let species_id = species[0].slice(-3, -1).replace('/', '');
                return dataSources.peopleAPI.getSpecies(species_id)
            } else {
                return null
            }
        },
        film_ids: ({ films }) => {
            let film_ids = [];
            for (val of films){
                // extracts film id from full API call 
                film_ids.push(val.slice(-2, -1))
            }
            return film_ids
        },

        vehicle_ids: ({ vehicles }) => {
            if (vehicles.length > 0){
                let vehicle_ids = [];
                for (val of vehicles){
                    // extracts vehicle id from full API call 
                    val = val.slice(-3, -1).replace('/', '');
                    vehicle_ids.push(val)
                }
                return vehicle_ids
            } else {
                return null
            }
        },

        starship_ids: ({ starships }) => {
            if (starships.length > 0){ 
                let starship_ids = [];
                for (val of starships){
                    // extracts starship id from full API call
                    val = val.slice(-3, -1).replace('/', '');
                    starship_ids.push(val)
                }
                return starship_ids
            } else {
                return null
            }
            
        },

    },

    peopleResultsList: {
        people: ( { results }) => {
            return results
        }
    },

    speciesResultsList: {
        species: ( { results }) => {
            return results
        }
    },


};

module.exports = resolvers;