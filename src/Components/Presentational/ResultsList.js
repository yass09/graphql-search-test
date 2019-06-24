import React from 'react'
import styled from 'styled-components'
import Item from './Item'

const List = styled.ul`
  list-style: none;
  width: 100%;
  padding: 1.5em;
  font-size: 2em;
  margin: 0;
  align-self: start;
`
const ResultsList = ({results}) => (
  <List>
    {results.map((result) => (
      <Item key={result.id} name={result.name}/>
    ))}
  </List>
)

export default ResultsList;