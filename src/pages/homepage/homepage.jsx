import React from 'react';

import './homepage.scss';
import { HomePageContainer } from './homepage.styles';


import Directory from '../../components/directory/directory';

const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
)

export default HomePage;