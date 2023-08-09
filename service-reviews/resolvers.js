
const resolvers = {
    Query: {
      // get all tracks, will be used to populate the homepage grid of our web client
      getReview: (_, { title, apiKey }, { dataSources }) => {
        // Add logic to accomdate NYT results for 'A New Hope'
        if (title == "A New Hope"){
            title = "Star Wars"
        }
        return dataSources.reviewsAPI.getReview(title, apiKey);
      },
    },

    reviewConnection: {
        reviewPageInfo: (parent) => {
            return {
                    copyRight: parent["copyright"],
                    status: parent["status"],
                    hasMore: parent["has_more"],
                    numResults: parent["num_results"],
                    status: parent["status"]}
        },

        nodes: ({ results }) => {
            if (results == null) {
                return null 
                // Add logic to accomdate NYT results for 'A New Hope'
            } else if (results.length > 1) {
                results = results[9]
            } else {
                results = results[0]
            }
                return {
                    mpaaRating: results["mpaa_rating"],
                    criticsPick: results["critics_pick"],
                    summaryShort: results["summary_short"],
                    articleURL: results["link"]["url"]
                }
        },
    },

  };


  module.exports = resolvers;

//   new hope 
// The Empire Strikes Back
