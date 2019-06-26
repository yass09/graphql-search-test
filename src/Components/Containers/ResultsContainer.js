import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import ResultsList from '../Presentational/ResultsList';
import InfoMessage from '../Presentational/InfoMessage'; 

const ResultsContainerDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ResultsContainer = ({artistSearchValue, isEmptySearch}) => {

  const artistSearchQuery = gql`
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
    `
  return (
    <ResultsContainerDiv>
      <Query
      query={artistSearchQuery}
      variables={{query: artistSearchValue}}
      >
        {({ data, loading, error }) => {
          console.log(loading, data)
          if (loading) return <InfoMessage type={'loading'}/>
          if (!data) return <InfoMessage type={'search'}/>
          if (data && data.search.artists.nodes.length === 0) return <InfoMessage hasNoResults={data.search.artists.nodes.length === 0} type={'search'}/>
          if (error) return <InfoMessage type={'error'} />

          return <ResultsList results={data.search.artists.nodes}/>
        }}
      </Query>
    </ResultsContainerDiv>
  )
}

export default ResultsContainer;