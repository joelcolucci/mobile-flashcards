import PropTypes from 'prop-types';
import React from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';

import { selectDecks } from '../reducers/deckReducer';

import Heading from '../components/Heading';
import { clearAsyncStorage } from '../utilities/StorageAPI';

class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Heading>Mobile flashcards</Heading>
        <Button
          title="Clear AsyncStorage"
          onPress={() => clearAsyncStorage()} />
      </View>
    );
  }
}

HomeScreen.propTypes = {
  dispatch: PropTypes.func,
  decks: PropTypes.array
};

function mapStateToProps(state, ownProps) {
  let decks = selectDecks(state);
  return {
    decks: decks
  };
}

export default connect(mapStateToProps)(HomeScreen);
