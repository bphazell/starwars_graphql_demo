import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import { useParams } from "react-router-dom";

const GET_TRACK = gql`
query GetFilmDetails($filmId: ID!) {
  film(id: $filmId) {
    title
    characters {
      name
       ... @defer { starships {
        name
      }
       }
    }
    opening_crawl
  }
}
`;

/**
* Track Page fetches a track's data from the gql query GET_TRACK
* and provides it to the TrackDetail component to display
*/
const Track = () => {
    const { trackId } = useParams();
    const filmId = trackId
    const { loading, error, data } = useQuery(GET_TRACK, {
      variables: { filmId },
    });
     
    return (
      <Layout>
     <QueryResult error={error} loading={loading} data={data}>
        <Layout grid>{JSON.stringify(data?.film)}</Layout>
          {/* <TrackDetail track={data?.film} /> */}
      </QueryResult> 
      </Layout>
    );
  };

  export default Track;