import React from 'react';
import { Button, Text, View, TextInput } from 'react-native';


class CardCreateFrom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: '',
      answer: ''
    };

    this.handleTextInputChange = this.handleTextInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextInputChange(key, text) {
    this.setState({
      [key]: text
    });
  }

  handleSubmit() {
    let { question, answer } = this.state;

    let card = {
      question,
      answer
    };

    // TODO:Dispatch action
    // this.props.dispatch();

    this.setState({
      question: '',
      answer: ''
    });
  }

  render() {
    return (
      <View>
        <Text>Create a new card</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.handleTextInputChange('question', text)}
          value={this.state.question} />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.handleTextInputChange('answer', text)}
          value={this.state.answer} />
        <Button
          onPress={this.handleSubmit}
          title="Save" />
      </View>
    );
  }
}


export default CardCreateFrom;
