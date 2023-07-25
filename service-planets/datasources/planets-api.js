const { RESTDataSource } = require("@apollo/datasource-rest");


class PlanetsAPI extends RESTDataSource {
    baseURL = "https://swapi.dev/api/"

    getAllPlanets(page) {
        return this.get(`planets/?page=${page}`)
    }
    
    getPlanet(id) {
        return this.get(`planets/${id}`)
    }
  }
  module.exports = PlanetsAPI;