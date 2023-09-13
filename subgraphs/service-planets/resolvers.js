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
        planet: (_, { id }, { dataSources }) => {
            return dataSources.planetsAPI.getPlanet(id);
        },
        allPlanets: (_, { page }, { dataSources }) => {
            return dataSources.planetsAPI.getAllPlanets(page);
        },
    },

    Planet: {

        id: ({ url }) => {
            return extractIDFromString(url) 
        },

        films: ( {films}) => {
            return extractIDFromArrayWithIDKey(films)
        },

        residents: ( { residents }) => {
            if (residents.length > 0){
                return extractIDFromArray(residents)
            } else {
                return null
            }
        },

        __resolveReference: ({ id }, { dataSources }) => {
            return dataSources.filmsAPI.getFilm(id);
        },
    }, 

    planetConnection: {
        nodes: ({ results }) => {
            return results
        },

        pageInfo: (parent) =>{
            return parent
        },
    },

};

module.exports = resolvers;