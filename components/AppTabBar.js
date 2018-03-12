import React from 'react';
import { TabNavigator } from 'react-navigation';

import { FontAwesome } from '@expo/vector-icons';

import AppHomeScreen from '../screens/AppHomeScreen';
import AppInfoScreen from '../screens/AppInfoScreen';
import DeckCreateScreen from '../screens/DeckCreateScreen';


const AppTabBar = TabNavigator({
  AppHomeScreen: {
    screen: AppHomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='home' size={30} color={tintColor} />
    }
  },
  DeckCreateScreen: {
    screen: DeckCreateScreen,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    }
  },
  AppInfoScreen: {
    screen: AppInfoScreen,
    navigationOptions: {
      tabBarLabel: 'App Info',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='info-circle' size={30} color={tintColor} />
    }
  }
});


export default AppTabBar;
