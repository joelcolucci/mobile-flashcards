import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Container from '../components/Container';
import DeckCardCreateForm from '../components/DeckCardCreateForm';
import Heading from '../components/Heading';

import { fetchCreateDeckCard } from '../actions/deckActions';

class DeckCardCreateScreen extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeckCardCreateSubmit = this.handleDeckCardCreateSubmit.bind(this);
  }

  handleDeckCardCreateSubmit(card) {
    this.props.dispatch(fetchCreateDeckCard(card));
    this.props.navigation.goBack();
  }

  render() {
    let { deckId } = this.props.navigation.state.params;

    return (
      <Container>
        <Heading>Add a card</Heading>
        <DeckCardCreateForm
          deckId={deckId}
          onSubmit={this.handleDeckCardCreateSubmit} />
      </Container>
    );
  }
}

DeckCardCreateScreen.propTypes = {
  dispatch: PropTypes.func,
  navigation: PropTypes.object
};

export default connect()(DeckCardCreateScreen);
