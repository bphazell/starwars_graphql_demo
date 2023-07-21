const resolvers = {

    Query: {
        film: (_, { id }, { dataSources }) => {
            console.log("in resolver")
            return dataSources.filmsAPI.getFilm(id);
        },
      },

};

module.exports = resolvers;