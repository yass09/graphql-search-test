import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const SideBarContainer = styled.nav`
  height 100%;
  background-color: #DDD5C7;
  padding: 2em;

  @media(max-width: 375px) {
    width: 100%;
    height: 4em;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Sidebar = () => (
  <SideBarContainer>
    <Navigation/>
  </SideBarContainer>
);

export default Sidebar;