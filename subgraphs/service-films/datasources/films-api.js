
const { RESTDataSource } = require("@apollo/datasource-rest");

class FilmsAPI extends RESTDataSource {
    baseURL = "https://swapi.dev/api/"

    getFilm(id) {
        return this.get(`films/${id}`)
    }

    getAllFilms() {
        return this.get(`films/`)
    }
  }

  module.exports = FilmsAPI;