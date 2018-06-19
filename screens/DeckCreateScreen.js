import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Container from '../components/Container';
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
      <Container style={styles.container}>
        <Heading>Create a new deck</Heading>
        <DeckCreateForm
          onSubmit={this.handleDeckCreateSubmit} />
      </Container>
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
