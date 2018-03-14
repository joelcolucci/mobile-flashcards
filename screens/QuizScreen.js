import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import { readDeck } from '../actions/deckActions';


class QuizScreen extends React.Component {
  componentDidMount() {
    let { deckId } = this.props.navigation.state.params;

    this.props.dispatch(readDeck(deckId));
  }

  render() {
    let { deckId } = this.props.navigation.state.params;
    return (
      <Text>QUIZ on {deckId}</Text>
    );
  }
}


function mapStateToProps(state, ownProps) {
  let decks = state.deckReducer;

  let { deckId } = ownProps.navigation.state.params;

  let deck = decks[deckId];

  return {
    ...deck
  };
}


export default connect(mapStateToProps)(QuizScreen);
