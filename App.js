import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import deckReducer from './reducers/deckReducer';


import AppStatusBar from './components/AppStatusbar';
import AppTabBar from './components/AppTabBar';
import DeckReadScreen from './screens/DeckReadScreen';


const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    deckReducer
  }),
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);


const MainNavigator = StackNavigator({
  Home: {
    screen: AppTabBar
  },
  DeckDetails: {
    screen: DeckReadScreen
  }
});


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppStatusBar backgroundColor={'purple'} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
