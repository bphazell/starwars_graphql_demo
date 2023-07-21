
const { RESTDataSource } = require("@apollo/datasource-rest");

class FilmsAPI extends RESTDataSource {
    baseURL = "https://swapi.dev/api/"

    getFilm(id) {
        console.log("in api call")
        return this.get(`films/${id}`)
    }
  }

  module.exports = FilmsAPI;