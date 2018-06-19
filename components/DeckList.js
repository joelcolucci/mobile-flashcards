import PropTypes from 'prop-types';
import React from 'react';
import { Button, View, ScrollView, Text } from 'react-native';

function DeckList(props) {
  let { decks, onDeckClick } = props;
  return (
    <View>
      {decks.length > 0 ? (
        <ScrollView>
          {decks && decks.map((deck) => {
            return (
              <View key={deck.id}>
                <Text>{deck.title}</Text>
                <Text>{deck.cards.length || 0} cards</Text>
                <Button
                  title="View deck"
                  onPress={() => onDeckClick(deck.id, deck.title)} />
              </View>
            );
          })}
        </ScrollView>
      ) : (
          <Text>No decks yet.. ;)</Text>
        )}
    </View>
  );
}

DeckList.propTypes = {
  decks: PropTypes.array,
  onDeckClick: PropTypes.func
};

export default DeckList;
