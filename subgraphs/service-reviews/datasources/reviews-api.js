const { RESTDataSource } = require("@apollo/datasource-rest");

class ReviewsAPI extends RESTDataSource {
    baseURL = "https://api.nytimes.com/svc/movies/v2/"

    getReview(search_string) {
        return this.get(`reviews/search.json?query=${search_string}&api-key=xXtd64C7bDJjRup1m4G4TJFoSe9KWXmp`);
    }

}

module.exports = ReviewsAPI;