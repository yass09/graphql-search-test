import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import ResultsList from '../Presentational/ResultsList';
import InfoMessage from '../Presentational/InfoMessage'; 
import SearchBar from '../Presentational/SearchBar';
import Main from '../Presentational/Main';

class ArtistSearchContainer extends React.Component {
  state = {
    artistSearchValue: ''
  };

  artistSearchQuery = gql`
  query artists ($query: String!){
    search {
      artists(query: $query) {
        nodes {
          id
          name
          }
        }
      }
    }
  `;

  onArtistSearch = value => {
    this.setState({ artistSearchValue: value });
  };

  render() {  
    const { artistSearchValue } = this.state;
   
    return (
      <Main flexDirection={'column'}>
        <SearchBar artistSearchValue={artistSearchValue} onArtistSearch={this.onArtistSearch} />
        <Query
        query={this.artistSearchQuery}
          variables={{ query: artistSearchValue}}
        >
          {({ data, loading, error }) => {
            if (loading) return <InfoMessage type={'loading'}/>
            if (!data) return <InfoMessage type={'search'}/>
            if (data && data.search.artists.nodes.length === 0) return <InfoMessage hasNoResults={data.search.artists.nodes.length === 0} type={'search'}/>
            if (error) return <InfoMessage type={'error'} />
  
            return <ResultsList results={data.search.artists.nodes}/>
          }}
        </Query>
      </Main>
    )
  }
}

export default ArtistSearchContainer;