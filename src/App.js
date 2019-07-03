import React from 'react';
import styled from 'styled-components';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import ArtistSearchContainer from './Components/Containers/ArtistSearchContainer';
import Header from './Components/Presentational/Header';
import Sidebar from './Components/Presentational/Sidebar';
import ArtistDetailsContainer from './Components/Containers/ArtistDetailsContainer';
import NotFound from './Views/NotFound';
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

  @media(max-width: 420px){
    flex-direction: column;
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
              <Route path={routes.HOMESEARCH} exact component={ArtistSearchContainer}/>
              <Route path={routes.ARTISTDETAILS} component={ArtistDetailsContainer}/>
              <Route component={NotFound} />
            </Switch>              
          </ContentWrapper>
      </BodyWrapper>
    </ApolloProvider>
  </Router>
);

export default App;
