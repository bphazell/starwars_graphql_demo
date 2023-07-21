const resolvers = {

    Query: {
        starship: (_, { id }, { dataSources}) => {
            return dataSources.starshipsAPI.getStarship(id);

        }
    }


};

module.exports = resolvers;