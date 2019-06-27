import React from 'react'
import styled from 'styled-components'
import Item from './Item'

const List = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0 1.5em;
  font-size: 2em;
  margin: 0;
  align-self: start;
  overflow: scroll;

  @media(max-width: 375px) {
    padding: 0 1em
    height: 85%;
  }
`
const ResultsList = ({results}) => (
  <List>
    {results.map((result) => (
      <Item key={result.id} name={result.name}/>
    ))}
  </List>
)

export default ResultsList;