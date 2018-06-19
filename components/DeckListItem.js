import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import Card from '../components/Card';

function DeckListItem(props) {
  return (
    <TouchableOpacity
      onPress={() => props.onPress(props.id, props.title)}>
      <Card>
        <Text>{props.title}</Text>
        <Text>{props.cards.length || 0} cards</Text>
      </Card>
    </TouchableOpacity>
  );
}

DeckListItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  cards: PropTypes.array,
  onPress: PropTypes.func
};

export default DeckListItem;
