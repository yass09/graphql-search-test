import React from 'react';
import styled from 'styled-components';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import ResultsContainer from './Components/Containers/ResultsContainer';
import Header from './Components/Presentational/Header';
import Sidebar from './Components/Presentational/Sidebar';
import Albums from './Components/Views/Albums';
import * as routes from './Constants/routes';

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
`;

const ContentWrapper = styled.main`
  display: flex;
  height: 100%;
  width: 100%;

  @media(max-width: 375px){
    flex-direction: column;
    height: 80%;
  }
`;

const App = () => (
  <Router>
    <ApolloProvider client={client}>
      <BodyWrapper>
        <Header/>
          <ContentWrapper>
            <Sidebar/>
            <Switch>
              <Route path={routes.HOMESEARCH} exact component={ResultsContainer}/>
              <Route path={routes.FAVOURITES} component={Albums}/>
            </Switch>              
          </ContentWrapper>
      </BodyWrapper>
    </ApolloProvider>
  </Router>
);

export default App;
