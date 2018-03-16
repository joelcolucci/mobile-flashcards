import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { readDeck } from '../actions/deckActions';
import Question from '../components/Question';


class QuizScreen extends React.Component {
  componentDidMount() {
    let { deckId } = this.props.navigation.state.params;

    this.props.dispatch(readDeck(deckId));
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
    let { deckId } = this.props.navigation.state.params;
    return (
      <View>
        {this.props.cards && this.props.cards.map((value, index) => {
          return (
            <Question
              key={index}
              question={value.question}
              answer={value.answer}
              onCorrect={this.handleCorrect}
              onIncorrect={this.handleIncorrect} />
          );
        })}
      </View>
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
