import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Container from '../components/Container';
import DeckList from '../components/DeckList';
import Heading from '../components/Heading';

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

  handleDeckClick(deckId, deckTitle) {
    let { navigation } = this.props;
    navigation.navigate('DeckRead', {
      deckId: deckId,
      deckTitle: deckTitle
    });
  }

  render() {
    return (
      <Container>
        <Heading>Mobile flashcards</Heading>
        <DeckList
          decks={this.props.decks}
          onDeckClick={this.handleDeckClick} />
      </Container>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null
};

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
