import React from 'react';
import './App.css';
import styled from 'styled-components'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import ResultsContainer from './Components/Containers/ResultsContainer'
import Header from './Components/Presentational/Header'


const client = new ApolloClient({
  uri: 'https://graphbrainz.herokuapp.com'
})



const BodyWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  color: black;
  height: 100vh;
  width: 100%;
`

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BodyWrapper>
        <Header/>
        <ResultsContainer/>
      </BodyWrapper>
    </ApolloProvider>
  )
}

export default App;
