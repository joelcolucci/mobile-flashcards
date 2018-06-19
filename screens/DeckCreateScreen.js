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
    this.props.dispatch(fetchCreateDeck(title));
    this.props.navigation.goBack();
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

DeckCreateScreen.navigationOptions = {
  header: null
};

DeckCreateScreen.propTypes = {
  dispatch: PropTypes.func,
  navigation: PropTypes.object
};

export default connect()(DeckCreateScreen);
