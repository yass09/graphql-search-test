import React from 'react';
import styled from 'styled-components';

import Item from './Item';

const FavouritesListAside = styled.aside`
  width:100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
    @media(max-width: 375px) {
      flex-direction: row;
      justify-content: space-around;
      &:after {
        position: absolute;
        right:0.5em;
        content: '>';
        font-size: 2.5em;
        top: -0.3em;      
      }
    }
`;
const FavouritesHeader = styled.h3`
  font-size: 1.5em;
  width: auto;
    @media(max-width: 375px) {
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
  li{
    margin: 0;
    margin-bottom: 1em;
    font-size: 1.5em;
  }
    @media(max-width: 375px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: auto;
      flex-direction: row;
      margin-left: 1em;
      li {
        margin-right: 1em;
        margin-bottom: 0;
      }
    }
`;


const FavouritesList = ({favourites}) => (
  <FavouritesListAside>
    <FavouritesHeader>Favourite Artists</FavouritesHeader>
    <FavouritesUL>
      {favourites && favourites.map((favourite) => (
        <Item name={favourite.name} key={favourite.id}/>
      ))}
    </FavouritesUL>
  </FavouritesListAside>
)
export default FavouritesList;