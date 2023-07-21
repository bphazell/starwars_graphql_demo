const resolvers = {
    Query: {
        planet: (_, { id }, { dataSources }) => {
            return dataSources.planetsAPI.getPlanet(id);
        }
    }

};

module.exports = resolvers;