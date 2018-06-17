import PropTypes from 'prop-types';
import React from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';

import DeckList from '../components/DeckList';
import Heading from '../components/Heading';
import { clearAsyncStorage } from '../utilities/StorageAPI';

import { fetchReadAllDecks } from '../actions/deckActions';
import { selectDecks } from '../reducers/deckReducer';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeckClick = this.handleDeckClick.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchReadAllDecks());
  }

  handleDeckClick(deckId) {
    let { navigation } = this.props;
    navigation.navigate('DeckRead', {deckId: deckId});
  }

  render() {
    return (
      <View>
        <Heading>Mobile flashcards</Heading>
        <Button
          title="Clear AsyncStorage"
          onPress={() => clearAsyncStorage()} />
        <DeckList
          decks={this.props.decks}
          onDeckClick={this.handleDeckClick} />
      </View>
    );
  }
}

HomeScreen.propTypes = {
  decks: PropTypes.array,
  dispatch: PropTypes.func,
  navigation: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  let decks = selectDecks(state);
  return {
    decks: decks
  };
}

export default connect(mapStateToProps)(HomeScreen);
