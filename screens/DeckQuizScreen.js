import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

import {
  clearLocalNotification,
  setLocalNotification } from '../utilities/NotificationAPI';

import Container from '../components/Container';
import Heading from '../components/Heading';
import QuizCard from '../components/QuizCard';

import {
  fetchDeckCardUpdate,
  fetchDeckQuizReset } from '../actions/deckActions';
import { selectDeck } from '../reducers/deckReducer';

class DeckQuizScreen extends React.Component {
  componentDidMount() {
    clearLocalNotification()
      .then(setLocalNotification);
  }

  handleAnswer(cardId, isCorrect) {
    this.props.dispatch(fetchDeckCardUpdate(cardId, isCorrect));
  }

  handleRestart(deckId) {
    this.props.dispatch(fetchDeckQuizReset(deckId));
  }

  render() {
    return (
      <Container>
        <Heading>Quiz</Heading>
        {this.props.card ? (
          <View>
            <Text>{this.props.progress}</Text>
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
          <View>
            <Text>Quiz Complete! Score: { this.props.score }</Text>
            <Button
              onPress={() => this.handleRestart(this.props.deckId)}
              title='Restart quiz' />
            <Button
              onPress={() => this.props.navigation.goBack()}
              title='Back to deck' />
          </View>
        )}
      </Container>
    );
  }
}

DeckQuizScreen.propTypes = {
  card: PropTypes.object,
  deckId: PropTypes.string,
  dispatch: PropTypes.func,
  navigation: PropTypes.object,
  progress: PropTypes.string,
  score: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  let { deckId } = ownProps.navigation.state.params;
  let deck = selectDeck(state, deckId);

  let numberOfCards = deck.cards.length;
  let numberOfCorrect = deck.cards.filter((elem) => {
    return elem.isCorrect === true;
  }).length;

  let percentageScore = `${Math.round((numberOfCorrect / numberOfCards) * 100)}%`;

  let currentCardIndex = deck.cards.findIndex((elem) => {
    return elem.isComplete === false;
  });
  let currentCard = deck.cards[currentCardIndex];

  return {
    card: currentCard,
    deckId: deckId,
    score: percentageScore,
    progress: `${currentCardIndex + 1}/${numberOfCards}`
  };
}


export default connect(mapStateToProps)(DeckQuizScreen);
