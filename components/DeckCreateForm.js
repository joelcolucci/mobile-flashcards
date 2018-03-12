import React from 'react';
import { Button, View, Text, TextInput } from 'react-native';

import { connect } from 'react-redux';

import { createDeck } from '../actions/deckActions';


class DeckCreateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };

    this.handleTextInputChange = this.handleTextInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextInputChange(text) {
    this.setState({
      title: text
    });
  }

  handleSubmit() {
    let { title } = this.state;

    this.props.dispatch(createDeck(title));
    this.setState({
      title: ''
    });
  }

  render() {
    return (
      <View>
        <Text>Deck title</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={this.handleTextInputChange}
          value={this.state.title} />
        <Button
          onPress={this.handleSubmit}
          title="Save" />
      </View>
    );
  }
}


export default connect()(DeckCreateForm);
