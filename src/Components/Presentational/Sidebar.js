import React from 'react';
import styled from 'styled-components';

import BackButton from './BackButton';
import FavouritesList from './FavouritesList';
import { favourites } from '../../Helpers/favourites';


const SideBarContainer = styled.nav`
  height 100%;
  background-color: #DDD5C7;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media(max-width: 420px) {
    width: 100%;
    height: 4em;
    padding: 1em;
    flex-direction: row;
  }
`;

const Sidebar = () => {
  return (
    <SideBarContainer>
      <BackButton to={'/'}/>
      <FavouritesList favourites={favourites}/>
    </SideBarContainer>
  );
};

export default Sidebar;