import React from 'react';
import { Text, View } from 'react-native';

import Heading from '../components/Heading';

function AppInfoScreen(props) {
  return (
    <View>
      <Heading>App Info</Heading>
      <Text>This app was created as part of Udacity's React Nanodegree</Text>
  </View>
  );
}

AppInfoScreen.navigationOptions = {
  header: null
};

export default AppInfoScreen;
