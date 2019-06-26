import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as routes from '../../Constants/routes';


const NavigationList = styled.ul`
  list-style: none;
  width: 100%;
  font-size: 2em;
  padding-left: 0;
  align-self: flex-start;

    @media(max-width: 375px) {
    width: 100%;
    display: flex;
    margin: 0;
    align-self: center;
    justify-content: space-around;
    padding: 0.5em;
    li {
      margin: 0;
      width: auto;
    }
  }
`;

const LinkItem = styled.li`
  margin-bottom: 0.5em;
  width: 5em;
`;

const NavigationLink = styled(NavLink).attrs({
  activeClassName: 'active'
})`

  text-decoration: none;
  color: black;
  &.active{
    font-weight: bold;
  }
`;

const Navigation = () => (
  <NavigationList>
    <LinkItem>
      <NavigationLink to={routes.HOMESEARCH} exact activeClassName='active'>Search</NavigationLink>
    </LinkItem>
    <LinkItem>
      <NavigationLink to={routes.FAVOURITES} activeClassName='active'>Favorites</NavigationLink>
    </LinkItem>
  </NavigationList>
);


export default Navigation;
