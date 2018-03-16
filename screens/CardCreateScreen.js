import React from 'react';
import { Text, View } from 'react-native';

import CardCreateForm from '../components/CardCreateForm';


class CardCreateScreen extends React.Component {
  render() {
    let { deckId } = this.props.navigation.state.params;

    return (
      <CardCreateForm deckId={deckId} />
    );
  }
}


export default CardCreateScreen;
