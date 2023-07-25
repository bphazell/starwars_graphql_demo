const resolvers = {
    Query: {
        planet: (_, { id }, { dataSources }) => {
            return dataSources.planetsAPI.getPlanet(id);
        },
        allPlanets: (_, { page }, { dataSources }) => {
            return dataSources.planetsAPI.getAllPlanets(page);
        },
    },

    resultsList: {
        planets: ({ results }) => {
            return results
        }
    },

};

module.exports = resolvers;