import PropTypes from 'prop-types';
import React from 'react';
import { Button, View, Text } from 'react-native';

class QuizCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCardFlipped: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((previousState) => {
      return {
        isCardFlipped: !previousState.isCardFlipped
      };
    });
  }

  render() {
    return (
      <View>
        {!this.state.isCardFlipped ? (
          <View>
            <Text>{this.props.question}</Text>
            <Button
              onPress={this.handleClick}
              title='Show answer' />
          </View>
        ) : (
          <View>
            <Text>{this.props.answer}</Text>
            <Button
              onPress={this.handleClick}
              title='Show question' />
          </View>
        )}
      </View>
    );
  }
}

QuizCard.propTypes = {
  answer: PropTypes.string,
  question: PropTypes.string
};

export default QuizCard;
