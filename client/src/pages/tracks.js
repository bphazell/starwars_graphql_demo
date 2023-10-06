import React from "react";
import { useQuery, gql } from "@apollo/client";
import TrackCard from "../containers/track-card";
import { Layout } from "../components";
import QueryResult from "../components/query-result";
import Track from "./track";
 
/** TRACKS gql query to retrieve all tracks */
const TRACKS = gql`
  query GetFilms {
    allFilms {
      nodes {
        id
        title
        director
        episode_id
        release_date
    }
  }
  }
`;
 
/**
* Tracks Page is the Catstronauts home page.
* We display a grid of tracks fetched with useQuery with the TRACKS query
*/
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);
   
  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {
          // JSON.stringify(data?.allFilms.nodes)
        data?.allFilms.nodes?.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))
        }
      </QueryResult>
    </Layout>
  );
};
 
export default Tracks;