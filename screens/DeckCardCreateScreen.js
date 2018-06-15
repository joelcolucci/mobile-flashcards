import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import DeckCardCreateForm from '../components/DeckCardCreateForm';
import { fetchCreateDeckCard } from '../actions/deckActions';

class DeckCardCreateScreen extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeckCardCreateSubmit = this.handleDeckCardCreateSubmit.bind(this);
  }

  handleDeckCardCreateSubmit(card) {
    console.log(card);
    this.props.dispatch(fetchCreateDeckCard(card));
  }

  render() {
    let { deckId } = this.props.navigation.state.params;

    return (
      <DeckCardCreateForm
        deckId={deckId}
        onSubmit={this.handleDeckCardCreateSubmit} />
    );
  }
}

export default connect()(DeckCardCreateScreen);
