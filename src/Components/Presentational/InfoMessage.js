import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import vynilIcon from '../../assets/vynil.svg';
import errorIcon from '../../assets/error.svg';
import searchIcon from '../../assets/music-search.svg';

const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;
const animatedLoading = css`
  ${rotateAnimation} 2s linear infinite
  `;
const noAnimation = 'none';

const MessageImg = styled.img`
  width: 15vh;
  height: 15vh;
  animation: ${props => props.type === 'loading' ? animatedLoading : noAnimation }
`;

const MessageText = styled.p`
  font-size: 2em;
  margin: 1em;
  text-align: center
`;

const errorMessage = 'Oops...Something went wrong. Sorry';
const loadingMessage = 'Loading...';
const searchMessage = 'Start searching for your favorite artists using the searchbar!';
const noResultsMessage = 'Sorry no results found, try another search!'; 

const setMessageIcon = (type) => {
  switch (type) {
    case 'loading': return vynilIcon;
    case 'error': return errorIcon;
    default : return searchIcon;
  }
}

const setMessageText = (type, hasNoResults) => {
  switch (type) {
    case 'loading': return loadingMessage;
    case 'error': return errorMessage;
    default: if(hasNoResults) {
      return noResultsMessage
    } 
    return searchMessage;
  } 
}

const InfoMessage = ({type, hasNoResults}) => {
    return (
    <MessageContainer>
      <MessageImg type={type} src={setMessageIcon(type)}/>
        <MessageText>{setMessageText(type, hasNoResults)}</MessageText>
    </MessageContainer>
  )
}

export default InfoMessage;