import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppTabBar from './components/AppTabBar';
import AppStatusBar from './components/AppStatusbar';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppStatusBar backgroundColor={'purple'} barStyle="light-content" />
        <AppTabBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
