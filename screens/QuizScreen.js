import React from 'react';
import { Text } from 'react-native';


class QuizScreen extends React.Component {
  render() {
    let { deckId } = this.props.navigation.state.params;
    return (
      <Text>QUIZ on {deckId}</Text>
    );
  }
}


export default QuizScreen;
