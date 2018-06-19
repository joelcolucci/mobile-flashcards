import React from 'react';
import { Button, Text } from 'react-native';

import Container from '../components/Container';
import Heading from '../components/Heading';
import { clearAsyncStorage } from '../utilities/StorageAPI';

function AppInfoScreen(props) {
  return (
    <Container>
      <Heading>App Info</Heading>
      <Text>This app was created as part of Udacity's React Nanodegree</Text>
      <Button
          title="Delete all data"
          onPress={() => clearAsyncStorage()} />
    </Container>
  );
}

AppInfoScreen.navigationOptions = {
  header: null
};

export default AppInfoScreen;
