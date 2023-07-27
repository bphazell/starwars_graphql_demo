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

        // allStarshipsAndVehicles: (_, { page }, { dataSources }) => {
        //     const starshps =  dataSources.starshipsAPI.getAllStarships(page);
        //     const vehicles =  dataSources.vehiclesAPI.getAllVehicles(page);
        //     return Object.assign(starshps, vehicles)
        // },
    },

    // resultsList: {
    //     __resolveType(result) {
    //         if(result.starships) {
    //             return 'shipsResultsList';
    //         }
    //         if(result.vehicles){
    //             return 'vehiclesResultsList';
    //         }
    //     }
    // },

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