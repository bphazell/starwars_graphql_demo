const resolvers = {

    Query: {
        allStarships: (_, __, { dataSources }) => {
            return dataSources.starshipsAPI.getAllStarships();
        },

        allVehicles: (_, __, { dataSources }) => {
            return dataSources.vehiclesAPI.getAllVehicles();
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