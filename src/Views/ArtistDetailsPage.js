import React from 'react';
import styled from 'styled-components';

import Main from '../Components/Presentational/Main';
import blackFavouriteIcon from '../assets/star-black.svg';
import yellowFavouriteIcon from '../assets/star-yellow.svg';


const ArtistHeaaderContainer = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2em 1em;
  border-bottom: #DDD5C7 2px solid; 
  margin-bottom: 2em;
  h2 {
    margin-left: 0;
  }
`;

const ArtistTitle = styled.h2`
  margin-top : 0;
  margin-bottom: 0.5em;
  width: 100%;
  margin-left: 1em;
`;

const ArtistAvatar = styled.img`
  width: 15em;
  height: 15em;
  margin-bottom: 1em;
`;

const ArtistInfoContainer = styled.div`
  flex-grow: 1;
  padding-left: 1em;

  h4, p{
    margin: 0
    margin-bottom: 0.2em;
  }
`;

const ArtistAlbumList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  overflow: scroll;
`;

const ArtistAlbumItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 1em;
`;

const ArtistAlbumCover = styled.img`
  width: 6em;
  height: 6em;
  margin: 0 1em;
`;

const AlbumInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  h5{
    font-size: 1em;
  }
  h5, p{
    margin: 0;
    margin-bottom: 0.2em;
  }
`;

const AddFavouriteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 40%;
`;

const AddFavouriteButton = styled.button`
  width: 2em;
  height: 2em;
  margin: 1em;
  background-color: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: 2em;
    height: 2em;
  }
`;


const ArtistDetailsPage = ({artistData, onClick, isFavourite}) => {
  const { 
    name,
    country,
    fanArt = [],
    spotify,
    releaseGroups : { edges: albums = [] } = {}
  } = artistData;

  const countryOfOrigin = country? country : 'N/A';
  const avatarUrl = () => {
    if (spotify) return spotify.images[1].url;
    return fanArt.thumbnails[0].url || '';
  }

  const genres = spotify && spotify.genres

  return (
    <Main flexDirection={'column'}>
      <ArtistHeaaderContainer>
        <ArtistAvatar src={avatarUrl()}/>
        <ArtistInfoContainer>
          { spotify ?
          <React.Fragment>
              <ArtistTitle>{spotify.name}</ArtistTitle>
              <h4>Country</h4>
              <p>{countryOfOrigin}</p>
              <h4>Genres</h4>
              {spotify.genres.map((genre) => <p key={genre}>{genre}</p>)}
          </React.Fragment>
          : <React.Fragment>
              <ArtistTitle>{name}</ArtistTitle>
              <h4>Country</h4>
              <p>{countryOfOrigin}</p>
              <h4>Genres</h4>
              {genres && genres.map((genre) => <p key={genre}>{genre}</p>)}
        </React.Fragment>}
        </ArtistInfoContainer> 
          <AddFavouriteContainer>
            <label> Add to Favourites</label>
            <AddFavouriteButton onClick={onClick}>
              <img src={isFavourite ? yellowFavouriteIcon : blackFavouriteIcon}  alt=""/>
            </AddFavouriteButton>
          </AddFavouriteContainer>
      </ArtistHeaaderContainer>
      <ArtistTitle>Albums & Releases</ArtistTitle>
      <ArtistAlbumList>
        {albums.map((album) => {
          const releaseDate = album.node.firstReleaseDate;
          const releaseYear = releaseDate.substring(0,4)
          return ( 
            <ArtistAlbumItem key={album.node.id}>
              <ArtistAlbumCover src={album.node.coverArtArchive.front}/>
              <AlbumInfoContainer>
                <h5>{album.node.title}</h5> 
                <p>{releaseYear}</p>
              </AlbumInfoContainer>
            </ArtistAlbumItem> 
          )
        })}
      </ArtistAlbumList>
    </Main>
)
}
export default ArtistDetailsPage;