import React, { useState } from 'react';
import styled from 'styled-components';

import SearchInput from './SearchInput';

const SearchForm = styled.form`
  margin: 2em;
  width: 50%;
  padding: 0 1.5em;
  @media(max-width: 375px) {
    width: 100%;
  }
`;

const SearchBar = props => {
  const [artistSearchValue, setArtistSearchValue] = useState(props.artistSearchValue);

  const handleSearchChange = (event) => {
    setArtistSearchValue(event.target.value)
  };

  const handleSubmitSearch = (event) => {
    props.onArtistSearch(artistSearchValue);
    event.preventDefault()
  }

  return (
    <SearchForm action="search" onSubmit={handleSubmitSearch}>
      <SearchInput value={artistSearchValue} onChange={handleSearchChange}/>
    </SearchForm>
  )
}

export default SearchBar;