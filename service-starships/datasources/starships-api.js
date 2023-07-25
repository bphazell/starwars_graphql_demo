const { RESTDataSource } = require("@apollo/datasource-rest");

class StarshipsAPI extends RESTDataSource {
    baseURL = "https://swapi.dev/api/"

    getAllStarships(page) {
        return this.get(`starships/?page=${page}`)
    }

    getStarship(id) {
        return this.get(`starships/${id}`)
    }
  }
  module.exports = StarshipsAPI;