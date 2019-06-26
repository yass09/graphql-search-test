import React from 'react';
import styled from 'styled-components'

import SearchBar from '../SearchBar'

const HeaderContainer = styled.header`
  width: 100%;
  ${'' /* min-height: 15vh; */}
  padding: 2em;  
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  border-bottom: lightgrey 0.1em solid;
`;

const Title = styled.h1`
  font-size: 6vh;
  margin: 0;
`;

const Header = ({ artistSearchValue, onArtistSearch}) => {
  return (
    <HeaderContainer>
      <Title>
        MusicPedia
      </Title>
      <SearchBar artistSearchValue={artistSearchValue} onArtistSearch={onArtistSearch}/>
    </HeaderContainer>
  )
};

export default Header;
