import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${props => props.flexDirection}
`;

const Main = ({flexDirection, children}) => (
  <MainContainer flexDirection={flexDirection}>
    {children}
  </MainContainer>
);

export default Main;
