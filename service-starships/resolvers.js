const resolvers = {

    Query: {
        allStarships: (_, __, { dataSources }) => {
            return dataSources.starshipsAPI.getAllStarships();
        },
        
        starship: (_, { id }, { dataSources}) => {
            return dataSources.starshipsAPI.getStarship(id);

        },

        vehicle: (_, { id}, {dataSources}) => {
            return dataSources.vehiclesAPI.getVehicle(id)
        }
    },

    resultsList: {
        starships: ({ results }) => {
            return results
        }
    }


};

module.exports = resolvers;