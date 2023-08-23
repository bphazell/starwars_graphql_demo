const { RESTDataSource } = require("@apollo/datasource-rest");

class PeopleAPI extends RESTDataSource {
    baseURL = "https://swapi.dev/api/"


    getAllPeople(page) {
        return this.get(`people/?page=${page}`);
    }

    getAllSpecies(page) {
        return this.get(`species/?page=${page}`);
    }

    getPerson(id) {
        return this.get(`people/${id}`);
    }

    getPersonByName(name) {
        return this.get(`people/?search=${name}`);
    }

    getSpecies(id) {
        return this.get(`species/${id}`);
    }

}

module.exports = PeopleAPI;