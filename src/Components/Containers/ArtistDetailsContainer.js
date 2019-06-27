import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Main from '../Presentational/Main';
import InfoMessage from '../Presentational/InfoMessage'; 
import ArtistDetailsPage from '../../Views/ArtistDetailsPage';



const ArtistDetailsContainer = ({match}) => {
  const artistDetailsQuery = gql`
  query artistsDetails ($query: String!){
  search {
    artists (query: $query, first: 1) {
			nodes{
        name 
        country
        fanArt{
          thumbnails {
            imageID
            url
            likeCount
          }
        }
        spotify {
          artistID
          name
          genres
          popularity
          images {
            url
          }
        }
        releaseGroups {
          edges {
            node {
              id
              title
              firstReleaseDate
              coverArtArchive {
                front
                back
              }
            }
          }
        }
      }
    }
   }
  }
  `;

  const addToFavourites = () => {

  }
  return (
    <Main>
      <Query
        query={artistDetailsQuery}
        variables={{query: match.params.name}}
      >
        {({ data, loading, error }) => {
          if (loading) return <InfoMessage type={'loading'} />
          if (!data) return <InfoMessage type={'search'} />
          if (data && data.search.artists.nodes.length === 0) return <InfoMessage hasNoResults={data.search.artists.nodes.length === 0} type={'search'} />
          if (error) return <InfoMessage type={'error'} />                    
          return <ArtistDetailsPage artistData={data.search.artists.nodes[0]}/>
        }}
      </Query>
    </Main>
  )
}

export default ArtistDetailsContainer;