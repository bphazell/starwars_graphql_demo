 // extracts id from full API call 
 function extractIDFromString(string){
    let id = string.slice(-3, -1).replace('/', '');
    return id
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
        allStarships: (_, { page }, { dataSources }) => {
            return dataSources.starshipsAPI.getAllStarships(page);
        },

        // sample code to wait for response before modifying returned object
        // testStarships: async (_, __, { dataSources}) => {
        //     const ships = await dataSources.starshipsAPI.getAllStarships(1)
        //     return ships["results"]
        // },

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

        id: ({ url }) => {
            return extractIDFromString(url) 
        },

        films: ({ films }) => {
            return extractIDFromArrayWithIDKey(films)
        },

        pilots: ({ pilots }) => {
            if (pilots.length > 0){ 
                return extractIDFromArrayWithIDKey(pilots)
            } else {
                return null
            }
            
        },

        __resolveReference: ({ id }, { dataSources }) => {
            return dataSources.starshipsAPI.getStarship(id);
        },

    },

    Vehicle: {

        id: ({ url }) => {
            return extractIDFromString(url) 
        },

        films: ({ films }) => {
            return extractIDFromArrayWithIDKey(films)
        },

        pilots: ({ pilots }) => {
            if (pilots.length > 0){ 
                return extractIDFromArrayWithIDKey(pilots)
            } else {
                return null
            }
            
        },

        __resolveReference: ({ id }, { dataSources }) => {
            return dataSources.vehiclesAPI.getVehicle(id)
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