const resolvers = {
    Query: {
        planet: (_, { id }, { dataSources }) => {
            return dataSources.planetsAPI.getPlanet(id);
        },
        allPlanets: (_, __, { dataSources }) => {
            return dataSources.planetsAPI.getAllPlanets();
        },
    },

    resultsList: {
        planets: ({ results }) => {
            return results
        }
    },

};

module.exports = resolvers;