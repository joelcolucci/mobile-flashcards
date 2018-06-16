import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

import { fetchDeckCardUpdate } from '../actions/deckActions';
import { selectDeck } from '../reducers/deckReducer';
import Heading from '../components/Heading';
import QuizCard from '../components/QuizCard';

class DeckQuizScreen extends React.Component {
  componentDidMount() {
    let { deckId } = this.props.navigation.state.params;
  }

  handleAnswer(cardId, isCorrect) {
    console.log(cardId);
    this.props.dispatch(fetchDeckCardUpdate(cardId, isCorrect));
  }

  render() {
    return (
      <View>
        <Heading>Quiz</Heading>
        {this.props.card ? (
          <View>
            <QuizCard
              question={this.props.card.question}
              answer={this.props.card.answer} />
            <Button
              onPress={() => this.handleAnswer(this.props.card.id, true)}
              title='Correct' />
            <Button
              onPress={() => this.handleAnswer(this.props.card.id, false)}
              title='Incorrect' />
          </View>
        ) : (
          <Text>Quiz Complete! Score: { this.props.score }</Text>
        )}
      </View>
    );
  }
}

DeckQuizScreen.propTypes = {
  card: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  let { deckId } = ownProps.navigation.state.params;
  let deck = selectDeck(state, deckId);

  let currentCard = deck.cards.find((elem) => {
    return elem.isComplete === false;
  });

  let numberOfCards = deck.cards.length;
  let numberOfCorrect = deck.cards.filter((elem) => {
    return elem.isCorrect === true;
  }).length;

  let percentageScore = `${Math.round((numberOfCorrect / numberOfCards) * 100)}%`;

  return {
    card: currentCard,
    score: percentageScore
  };
}


export default connect(mapStateToProps)(DeckQuizScreen);
