const { RESTDataSource } = require("@apollo/datasource-rest");

class PeopleAPI extends RESTDataSource {
    baseURL = "https://swapi.dev/api/"


    getAllPeople() {
        return this.get(`people/`);
    }

    getPerson(id) {
        return this.get(`people/${id}`);
    }

    getSpecies(id) {
        return this.get(`species/${id}`);
    }

}

module.exports = PeopleAPI;