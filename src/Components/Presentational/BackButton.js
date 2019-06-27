import React from 'react';
import styled from 'styled-components';
import backButton from '../../assets/back.svg';
import { NavigationLink } from './NavigationLink'

const BackIcon = styled.img`
  width: 3em;
  height: 3em;
  @media(max-width: 375px) {
    width: 2em;
    height: 2em;
  }
`;

const BackButton = ({to}) => (
  <NavigationLink to={to}>
    <BackIcon src={backButton}/>
  </NavigationLink>
);

export default BackButton;
 