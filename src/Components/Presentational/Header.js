import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  height: 15vh;
  padding: 3em 0 0 2em;  
  border-bottom: lightgrey 0.1em solid;
  @media(max-width: 375px) {
    height: 14vh;
    padding: 2.5em 0 0 1em;
  }
`;

const Title = styled.h1`
  font-size: 6vh;
  margin: 0;
  display: inline-block;
`;

const Header = ({ 
  artistSearchValue, 
  onArtistSearch, 
  location
}) => {
  return (
    <HeaderContainer>
      <Title>
        MusicPedia
      </Title>
    </HeaderContainer>
  )
};

export default Header;
