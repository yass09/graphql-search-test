import React from 'react';
import styled from 'styled-components';

import Item from './Item';
import chevron from '../../assets/right-arrow.svg';

const FavouritesListAside = styled.aside`
  width:100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
    @media(max-width: 420px) {
      flex-direction: row;
      justify-content: space-around;
    }
`;
const FavouritesHeader = styled.h3`
  font-size: 1.5em;
  width: auto;
    @media(max-width: 420px) {
      font-size: 1.2em;
      margin: 0;
      margin-left: 1em;
      display: flex;
      align-items: center;
      justify-content: center;
    }

`;

const FavouritesUL = styled.ul`
  list-style: none;
  width: 100%
  height: 100%;
  overflow: scroll;
  padding: 0;
  margin: 0;
  flex-grow: 1;
  position: relative;
  li{
    margin: 0;
    margin-bottom: 1em;
    font-size: 1.5em;
  }
    @media(max-width: 420px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: auto;
      flex-direction: row;
      margin-left: 1em;
      li {
        margin-right: 1em;
        margin-bottom: 0;
        font-size: 1em;
      }
    }
`;

const ScrollIcon = styled.img`
  width: 2em;
  height: 2em;

`;

const ScrollIconContainer = styled.div`
  -webkit-box-shadow: inset -30px 0px 19px -2px #DDD5C7; 
  box-shadow: inset -30px 0px 19px -2px #DDD5C7;
  height: 100%;
  width: 2em;
  position: absolute;
  right: 0
`;




const FavouritesList = ({favourites}) => {
  
  const isMobile = window.screen.width <= 420;
  const shouldDisplayScrollIcon = isMobile && favourites.length >= 4;

  return (
    <FavouritesListAside>
      <FavouritesHeader>Favourite Artists</FavouritesHeader>
      <FavouritesUL>
        {favourites && favourites.map((favourite) => (
          <Item name={favourite.name} key={favourite.id}/>
        ))}
      </FavouritesUL>
        {shouldDisplayScrollIcon && <ScrollIconContainer>
          <ScrollIcon src={chevron}/>
        </ScrollIconContainer>}
    </FavouritesListAside>
  )
}
export default FavouritesList;