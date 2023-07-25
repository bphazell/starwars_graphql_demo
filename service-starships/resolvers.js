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

    shipsResultsList: {
        starships: ({ results }) => {
            return results
        },
    },

    vehiclesResultsList: {
        vehicles: ({ results }) => {
            return results
        },
    },


};

module.exports = resolvers;