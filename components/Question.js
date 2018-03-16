import React from 'react';
import { Button, Text, View } from 'react-native';


class Question extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showQuestion: true
    };

    this.handleToggleShowQuestion = this.handleToggleShowQuestion.bind(this);
  }

  handleToggleShowQuestion() {
    this.setState((previousSate) => ({
      showQuestion: !previousSate.showQuestion
    }));
  }

  render() {
    let { showQuestion } = this.state;
    let mainContent;
    if (showQuestion) {
      mainContent = (
        <View>
          <Text>{this.props.question}</Text>
          <Button
            title="Show Answer"
            onPress={this.handleToggleShowQuestion} />
        </View>
      );
    } else {
      mainContent = (
        <View>
          <Text>{this.props.answer}</Text>
          <Button
            title="Show Question"
            onPress={this.handleToggleShowQuestion} />
        </View>
      );
    }

    return (
      <View>
        {mainContent}
        <Button
          title="Correct"
          onPress={() => this.props.onCorrect(this.props.question)} />
        <Button
          title="Incorrect"
          onPress={() => this.props.onIncorrect(this.props.question)} />
      </View>
    );
  }
}


export default Question;
