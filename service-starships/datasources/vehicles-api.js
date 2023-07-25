const { RESTDataSource } = require("@apollo/datasource-rest");

class VehiclesAPI extends RESTDataSource {
    baseURL = "https://swapi.dev/api/"

    getVehicle(id) {
        return this.get(`vehicles/${id}`)
    }

    getAllVehicles() {
        return this.get(`vehicles/`)
    }
  }
  module.exports = VehiclesAPI;