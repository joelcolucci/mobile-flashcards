import PropTypes from 'prop-types';
import React from 'react';
import { Button, View, Text, TextInput } from 'react-native';

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
    this.setState({
      title: ''
    });

    this.props.onSubmit(title);
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
          title="Create deck" />
      </View>
    );
  }
}

DeckCreateForm.propTypes = {
  onSubmit: PropTypes.func
};

export default DeckCreateForm;
