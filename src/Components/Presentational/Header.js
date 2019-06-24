import React from 'react';
import styled from 'styled-components'

const HeaderContainer = styled.header`
  width: 100%;
  height: 15vh;
  padding: 2em;  
  display: flex;
  align-items: center;
  border-bottom: lightgrey 0.1em solid
`;

const Title = styled.h1`
  font-size: 6vh;
  margin: 0;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>
        MusicPedia
      </Title>
    </HeaderContainer>
  )
};

export default Header;
