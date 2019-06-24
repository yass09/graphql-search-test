import React from 'react'
import styled from 'styled-components'

const ItemContainer = styled.li`
  width: 100%;
  height: 2em;
  padding: 1em 0;
`

const Item = ({name}) => (
  <ItemContainer>
    {name}
    {/* {(!name && title) &&
      
    } */}
  </ItemContainer>
)

export default Item