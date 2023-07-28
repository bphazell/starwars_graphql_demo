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

const resolvers = {

    Query: {
        allStarships: (_, { page }, { dataSources }) => {
            return dataSources.starshipsAPI.getAllStarships(page);
        },

        allVehicles: (_, { page }, { dataSources }) => {
            return dataSources.vehiclesAPI.getAllVehicles(page);
        },
        
        starship: (_, { id }, { dataSources}) => {
            return dataSources.starshipsAPI.getStarship(id);

        },

        vehicle: (_, { id}, {dataSources}) => {
            return dataSources.vehiclesAPI.getVehicle(id)
        },
    },

    Starship: {
        film_ids: ({ films }) => {
            return extractIDFromArray(films)
        },

        pilots: ({ pilots }) => {
            if (pilots.length > 0){ 
                return extractIDFromArray(pilots)
            } else {
                return null
            }
            
        },

    },

    Vehicle: {
        film_ids: ({ films }) => {
            return extractIDFromArray(films)
        },

        pilots: ({ pilots }) => {
            if (pilots.length > 0){ 
                return extractIDFromArray(pilots)
            } else {
                return null
            }
            
        },

    },

    shipsConnection: {
        nodes: ({ results }) => {
            return results
        },

        pageInfo: (parent) => {
            return parent
        },
    },

    vehiclesConnection: {
        nodes: ({ results }) => {
            return results
        },

        pageInfo: (parent) =>{
            return parent
        },
    },


};

module.exports = resolvers;