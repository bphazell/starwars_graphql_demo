const { RESTDataSource } = require("@apollo/datasource-rest");

class PeopleAPI extends RESTDataSource {
    baseURL = "https://swapi.dev/api/"


    getAllPeople() {
        console.log(this.get('people'));
        // return this.get('people')['results'];
    }

    getPerson(id) {
        return this.get(`people/${id}`);
    }

    getSpecies(url) {
        return this.get(`${url}`);
    }

}

module.exports = PeopleAPI;