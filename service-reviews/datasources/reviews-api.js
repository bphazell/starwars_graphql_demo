const { RESTDataSource } = require("@apollo/datasource-rest");

class ReviewsAPI extends RESTDataSource {
    baseURL = "https://api.nytimes.com/svc/movies/v2/"

    getReview(search_string, apiKey) {
        return this.get(`reviews/search.json?query=${search_string}&api-key=${apiKey}`);
    }

}

module.exports = ReviewsAPI;