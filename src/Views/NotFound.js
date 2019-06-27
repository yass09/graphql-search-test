import React from 'react';

import InfoMessage from '../Components/Presentational/InfoMessage';
import Main from '../Components/Presentational/Main';

const NotFound = () => (
  <Main>
    <InfoMessage type={'error'}/>
  </Main>
);

export default NotFound
