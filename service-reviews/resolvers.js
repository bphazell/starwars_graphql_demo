

function extractNYTResults(results) {
 if (results.length > 1) {
        return results[9]
    } else {
        return results[0]
    }
}
// Generates an ID field based of the display title based on the SWAPI ID Needs
function mapNYTDisplayTitleToSWAPIID(displayTitle) {
    if (displayTitle.includes("Attack of the Clones")) {
        return 5
    } else if (displayTitle == "Star Wars") {
        return 1
    } else if (displayTitle.includes("The Empire Strikes Back")) {
        return 2
    } else if (displayTitle.includes("Return of the Jedi")) {
        return 3
    } else if (displayTitle.includes("The Phantom Menace")) {
        return 4
    } else if (displayTitle.includes("Revenge of the Sith")) {
        return 6
    } else {
        return null
    }

}

const resolvers = {
    Query: {
      getReview: (_, { searchTitle }, { dataSources }) => {
        // Add logic to accomdate NYT results for 'A New Hope'
        if (searchTitle == "A New Hope"){
            searchTitle = "Star Wars"
        }
        return dataSources.reviewsAPI.getReview(searchTitle);
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
            if (results != null) {
                results = extractNYTResults(results)
                    return {
                        displayTitle: results["display_title"],
                        mpaaRating: results["mpaa_rating"],
                        criticsPick: results["critics_pick"],
                        summaryShort: results["summary_short"],
                        articleURL: results["link"]["url"]
                    }
                }
        },
    },

    Film: {
        id: ({ displayTitle }) => {
            return mapNYTDisplayTitleToSWAPIID(displayTitle)
        },

        __resolveReference: async ({ title }, { dataSources}) => {
            // Add logic to accomdate NYT results for 'A New Hope'
            if (title == "A New Hope"){
                title = "Star Wars"
            }
            let search_results = await dataSources.reviewsAPI.getReview(title);
            results = search_results["results"]
            if (results != null) {
                results = extractNYTResults(results)
                return {
                    displayTitle: results["display_title"],
                    mpaaRating: results["mpaa_rating"],
                    criticsPick: results["critics_pick"],
                    summaryShort: results["summary_short"],
                    articleURL: results["link"]["url"]
                }
            }
        }
    }

  };


  module.exports = resolvers;

