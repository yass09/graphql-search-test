import React from 'react';
import styled from 'styled-components';

import { NavigationLink } from './NavigationLink';

const ItemContainer = styled.li`
  width: 100%;
  margin-bottom: 1em
`;

const Item = ({name}) => (
  <ItemContainer>
    <NavigationLink to={`/artist/${name}`}>{name}</NavigationLink>
  </ItemContainer>
)

export default Item