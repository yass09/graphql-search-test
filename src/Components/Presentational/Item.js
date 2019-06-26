import React from 'react'
import styled from 'styled-components'

const ItemContainer = styled.li`
  width: 100%;
  margin-bottom: 1em
`;

const Item = ({name}) => (
  <ItemContainer>
    {name}
    {/* {(!name && title) &&
      
    } */}
  </ItemContainer>
)

export default Item