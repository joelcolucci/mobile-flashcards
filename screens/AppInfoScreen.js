import React from 'react';
import { Text } from 'react-native';

import Container from '../components/Container';
import Heading from '../components/Heading';

function AppInfoScreen(props) {
  return (
    <Container>
      <Heading>App Info</Heading>
      <Text>This app was created as part of Udacity's React Nanodegree</Text>
    </Container>
  );
}

AppInfoScreen.navigationOptions = {
  header: null
};

export default AppInfoScreen;
