import React from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';

import { selectDeck } from '../reducers/deckReducer';
import Heading from '../components/Heading';
import QuizCard from '../components/QuizCard';

class DeckQuizScreen extends React.Component {
  componentDidMount() {
    let { deckId } = this.props.navigation.state.params;
  }

  handleCorrect(question) {
    console.log(question);
    // this.props.dispatch(updateQuestionStatus(question, 'correct'));
  }

  handleIncorrect(question) {
    console.log(question);
    // this.props.dispatch(updateQuestionStatus(question, 'incorrect'));
  }

  render() {
    return (
      <View>
        <Heading>Quiz</Heading>
        <QuizCard
          question='Capital of Connecticut?'
          answer='Hartford' />
        <Button
          onPress={() => console.log('correct')}
          title='Correct' />
        <Button
          onPress={() => console.log('incorrect')}
          title='Incorrect' />
      </View>
    );
  }
}


function mapStateToProps(state, ownProps) {
  let { deckId } = ownProps.navigation.state.params;
  let deck = selectDeck(state, deckId);

  return {
    ...deck
  };
}


export default connect(mapStateToProps)(DeckQuizScreen);
