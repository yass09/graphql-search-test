import React, { useState } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Main from '../Presentational/Main';
import InfoMessage from '../Presentational/InfoMessage'; 
import ArtistDetailsPage from '../../Views/ArtistDetailsPage';

const ArtistDetailsContainer = ({match}) => {
  let favourites = JSON.parse(localStorage.getItem('Favourites')) || [];
  const [isFavourite, setIsFavourite] = useState(favourites.some(({ name }) => name === match.params.name))
  const artistDetailsQuery = gql`
  query artistsDetails ($query: String!){
  search {
    artists (query: $query, first: 1) {
			nodes{
        id
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

  const toggleFavourites = (artist) => {
    if(!favourites.some(({name}) => name === artist.name)){
      favourites.push(artist);
      setIsFavourite(!isFavourite)
      localStorage.setItem('Favourites', JSON.stringify(favourites))   
    } else {
      favourites = favourites.filter(({ id }) => id !== artist.id);
      setIsFavourite(!isFavourite)
      localStorage.setItem('Favourites', JSON.stringify(favourites))
    }
  }
  return (
    <Main>
      <Query
        query={artistDetailsQuery}
        variables={{query: match.params.name }}
      >
        {({ data, loading, error }) => {
          if (loading) return <InfoMessage type={'loading'} />
          if (!data) return <InfoMessage type={'search'} />
          if (data && data.search.artists.nodes.length === 0) return <InfoMessage hasNoResults={data.search.artists.nodes.length === 0} type={'search'} />
          if (error) return <InfoMessage type={'error'} />                    
          return <ArtistDetailsPage isFavourite={isFavourite} artistData={data.search.artists.nodes[0]} onClick={toggleFavourites}/>
        }}
      </Query>
    </Main>
  )
}

export default ArtistDetailsContainer;