import PropTypes from 'prop-types';
import React from 'react';
import { Button, View, Text } from 'react-native';

function DeckList(props) {
  let { decks, onDeckClick } = props;
  return (
    <View>
      {decks && decks.map((deck) => {
        return (
          <View key={deck.id}>
            <Text>{deck.title}</Text>
            <Text>{deck.cards.length || 0} cards</Text>
            <Button
              title="View deck"
              onPress={() => onDeckClick(deck.id)} />
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
