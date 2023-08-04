 // extracts id from full API call 
function extractIDFromString(string){
        let id = string.slice(-3, -1).replace('/', '');
        return id
};

// iterates through a loop to extract id from full API call 
function extractIDFromArray(array){
    let output_array = [];
        for (val of array){
            val = extractIDFromString(val)
            output_array.push(val)
        }
        return output_array
};

function extractIDFromArrayWithIDKey(array){
    let output_array = [];
        for (val of array){
            val = extractIDFromString(val)
            output_array.push({id: val})
        }
        return output_array
};

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

        species:(_, { id }, { dataSources }) => {
            return dataSources.peopleAPI.getSpecies(id);
        },
    },

    Person: {

        id: ({url}) => {
            return extractIDFromString(url)
        },

        species: ({ species }, _, { dataSources }) => {
            if (species.length > 0){
                let species_id = extractIDFromString(species[0])
                return dataSources.peopleAPI.getSpecies(species_id)
            } else {
                return null
            }
        },
        films: ({ films }) => {
            let film_id = extractIDFromArrayWithIDKey(films)
            return film_id
        },

        vehicle_ids: ({ vehicles }) => {
            if (vehicles.length > 0){
                return extractIDFromArray(vehicles)
            } else {
                return null
            }
        },

        starship_ids: ({ starships }) => {
            if (starships.length > 0){ 
                return extractIDFromArray(starships)
            } else {
                return null
            }
            
        },

        homeworld_id: ({homeworld}) => {
            if (typeof homeworld !== 'undefined'){
                return extractIDFromString(homeworld)
            } else {
                return null
            }
        },

        __resolveReference: ({ id }, { dataSources}) => {
            return dataSources.peopleAPI.getPerson(id);
        },

    },

    Species: {
        people: ({ people }, __, { dataSources}) => {
            let people_array = []
            for (val of people) {
                let person_id = extractIDFromString(val)
                people_array.push(dataSources.peopleAPI.getPerson(person_id))
            }
            return people_array
        },
    },

    peopleConnection: {
        nodes: ( { results }) => {
            return results
        },
        pageInfo: (parent) => {
            return parent
        },
    },

    speciesConnection: {
        nodes: ( { results }) => {
            return results
        },
        pageInfo: (parent) => {
            return parent
        },
    },


};

module.exports = resolvers;