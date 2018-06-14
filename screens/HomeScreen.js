import PropTypes from 'prop-types';
import React from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';

import { selectDecks } from '../reducers/deckReducer';

import DeckList from '../components/DeckList';
import Heading from '../components/Heading';

import { fetchReadAllDecks } from '../actions/deckActions';
import { clearAsyncStorage } from '../utilities/StorageAPI';

class HomeScreen extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchReadAllDecks());
  }

  render() {
    return (
      <View>
        <Heading>Mobile flashcards</Heading>
        <DeckList
          decks={this.props.decks} />
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
