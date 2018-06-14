import PropTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native';

function DeckList(props) {
  return (
    <View>
      {props.decks && props.decks.map((deck) => {
        return (
          <View key={deck.id}>
            <Text>{deck.title}</Text>
            <Text>{deck.cards.length || 0} cards</Text>
          </View>
        );
      })}
    </View>
  );
}

DeckList.propTypes = {
  decks: PropTypes.array
};

export default DeckList;
