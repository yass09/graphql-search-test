import React from 'react';
import './App.css';
import styled from 'styled-components'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import ResultsContainer from './Components/Containers/ResultsContainer'
import Header from './Components/Presentational/Header'

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: 'https://graphbrainz.herokuapp.com',
  cache

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

class App extends React.Component {
  state = {
    artistSearchQuery : ''
  };

  onArtistSearch = value => {
    this.setState({ artistSearchQuery: value});
  };

  render () {
    const { artistSearchQuery } = this.state; 
    console.log(artistSearchQuery)
    return (
      <ApolloProvider client={client}>
        <BodyWrapper>
          <Header onArtistSearch={this.onArtistSearch} artistSearchValue={artistSearchQuery}/>
          <ResultsContainer artistSearchValue={artistSearchQuery}/>
        </BodyWrapper>
      </ApolloProvider>
    )
  }
}

export default App;
