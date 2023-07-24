const resolvers = {

    Query: {
        film: (_, { id }, { dataSources }) => {
            return dataSources.filmsAPI.getFilm(id);
        },
        allFilms: (_, __, { dataSources }) => {
            return dataSources.filmsAPI.getAllFilms();
        }
      },
    
    resultsList: {
        films: ( { results }) => {
            return results
        }
    }

};

module.exports = resolvers;