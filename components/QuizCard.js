import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Card from '../components/Card';
import SecondaryButton from '../components/SecondaryButton';

const styles = StyleSheet.create({
  center: {
    textAlign: 'center',
    fontSize: 22
  }
});

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
      <Card>
        {!this.state.isCardFlipped ? (
          <View>
            <Text style={styles.center}>{this.props.question}</Text>
            <SecondaryButton
              onPress={this.handleClick}
              title='Show answer' />
          </View>
        ) : (
          <View>
            <Text style={styles.center}>{this.props.answer}</Text>
            <SecondaryButton
              onPress={this.handleClick}
              title='Show question' />
          </View>
        )}
      </Card>
    );
  }
}

QuizCard.propTypes = {
  answer: PropTypes.string,
  question: PropTypes.string
};

export default QuizCard;
