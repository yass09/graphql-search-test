import React, { useState } from 'react';
import styled from 'styled-components';

import SearchInput from '../Components/Presentational/SearchInput'

const SearchBar = props => {
  const [artistSearchValue, setartistSearchValue] = useState(props.artistSearchValue);

  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setartistSearchValue(event.target.value)
  };

  const handleSubmitSearch = (event) => {
    props.onArtistSearch(artistSearchValue);
    event.preventDefault()
  }

  return (
    <form action="search" onSubmit={handleSubmitSearch}>
      <SearchInput value={artistSearchValue} onChange={handleSearchChange}/>
    </form>
  )
}

export default SearchBar;