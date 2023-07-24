const { RESTDataSource } = require("@apollo/datasource-rest");

class StarshipsAPI extends RESTDataSource {
    baseURL = "https://swapi.dev/api/"

    getAllStarships() {
        return this.get(`starships/`)
    }

    getStarship(id) {
        return this.get(`starships/${id}`)
    }
  }
  module.exports = StarshipsAPI;