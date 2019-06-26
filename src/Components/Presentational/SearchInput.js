import React from 'react';
import styled from 'styled-components';
import search from '../../assets/search.svg'

const StyledInput = styled.input.attrs(props =>({
  type: 'text',
  placeholder: 'Search...'
}))`
  border: none;
  border-bottom: black 2px solid;
  width: 100%;
  padding: 0.5em;
  font-size: 1.5em;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-size: 0.7em 0.7em;
  background-position: right center;
`;

const SearchInput = ({value, onChange}) => (
  <StyledInput value={value} onChange={onChange}/>
)

export default SearchInput;