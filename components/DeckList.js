import React from 'react';
import { Button, Text, View } from 'react-native';


function DeckList(props) {
  return (
    <React.Fragment>
      {props.decks && props.decks.map((value) => {
        return (
          <View key={value.title}>
            <Text>{value.title}</Text>
            <Text>{value.questions.length}</Text>
            <Button
              title="Go to Details"
              onPress={() => props.navigation.navigate('DeckDetails', {deckId: value.title})}
            />
          </View>
        );
      })}
    </React.Fragment>
  );
}


export default DeckList;
