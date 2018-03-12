import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import { readAllDecks } from '../actions/deckActions';
import DeckList from '../components/DeckList';


class AppHomeScreen extends React.Component {
  componentDidMount() {
    this.props.dispatch(readAllDecks());
  }

  render() {
    return (
      <View>
        <Text>This is the Home view</Text>
        <DeckList
          decks={this.props.decks}
          navigation={this.props.navigation} />
      </View>
    );
  }
}


function mapStateToProps(state, ownProps) {
  let decks = state.deckReducer;
  return {
    decks: Object.keys(decks).map((key) => {
      return decks[key];
    })
  };
}


export default connect(mapStateToProps)(AppHomeScreen);
