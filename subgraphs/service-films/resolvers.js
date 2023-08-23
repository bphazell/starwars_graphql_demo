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
        film:  (_, { id }, { dataSources }) => {
            return dataSources.filmsAPI.getFilm(id);
        },
        allFilms: (_, __, { dataSources }) => {
            return dataSources.filmsAPI.getAllFilms();
        }
      },
    
    filmConnection: {
        nodes: ({ results }) => {
            return results
        },

        pageInfo: (parent) =>{
            return parent
        },
    },

    Film: {

        id: ({ url }) => {
            return extractIDFromString(url) 
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

        characters: ({ characters }) => {
            if (characters.length > 0){ 
                return extractIDFromArrayWithIDKey(characters)
            } else {
                return null
            }
            
        },

        planet_ids: ({ planets }) => {
            if (planets.length > 0){ 
                return extractIDFromArray(planets)
            } else {
                return null
            }
            
        },

        species_ids: ({ species }) => {
            if (species.length > 0){ 
                return extractIDFromArray(species)
            } else {
                return null
            }
            
        },

        __resolveReference: ({ id }, { dataSources }) => {
            return dataSources.filmsAPI.getFilm(id);
        },

    },

};

module.exports = resolvers;