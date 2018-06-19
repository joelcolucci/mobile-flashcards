import PropTypes from 'prop-types';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import DeckListItem from './DeckListItem';

function DeckList(props) {
  let { decks, onDeckClick } = props;
  return (
    <View>
      {decks.length > 0 ? (
        <ScrollView>
          {decks.map((deck) => {
            return (
              <DeckListItem
                key={deck.id}
                {...deck}
                onPress={onDeckClick} />
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
