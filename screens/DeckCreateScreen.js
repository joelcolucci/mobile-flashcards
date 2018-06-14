import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import Heading from '../components/Heading';
import DeckCreateForm from '../components/DeckCreateForm';
import { fetchCreateDeck } from '../actions/deckActions';

class DeckCreateScreen extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeckCreateSubmit = this.handleDeckCreateSubmit.bind(this);
  }

  handleDeckCreateSubmit(title) {
    console.log(title);
    this.props.dispatch(fetchCreateDeck(title));
  }

  render() {
    return (
      <View>
        <Heading>Create a new deck</Heading>
        <DeckCreateForm
          onSubmit={this.handleDeckCreateSubmit} />
      </View>
    );
  }
}

DeckCreateScreen.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(DeckCreateScreen);
