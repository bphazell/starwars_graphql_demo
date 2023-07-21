const { RESTDataSource } = require("@apollo/datasource-rest");


class PlanetsAPI extends RESTDataSource {
    baseURL = "https://swapi.dev/api/"

    getPlanet(id) {
        return this.get(`planets/${id}`)
    }
  }
  module.exports = PlanetsAPI;