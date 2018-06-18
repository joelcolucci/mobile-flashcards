import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { setLocalNotification } from './utilities/NotificationAPI';

import AppStatusBar from './components/AppStatusbar';
import AppTabBar from './components/AppTabBar';
import DeckCardCreateScreen from './screens/DeckCardCreateScreen';
import DeckReadScreen from './screens/DeckReadScreen';
import DeckQuizScreen from './screens/DeckQuizScreen';

import { deck } from './reducers/deckReducer';

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    deck
  }),
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);

const MainNavigator = StackNavigator({
  Home: {
    screen: AppTabBar
  },
  DeckRead: {
    screen: DeckReadScreen
  },
  DeckCardCreate: {
    screen: DeckCardCreateScreen
  },
  Quiz: {
    screen: DeckQuizScreen
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

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
