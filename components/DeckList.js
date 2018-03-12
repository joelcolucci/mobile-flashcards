import React from 'react';
import { Text, View } from 'react-native';


function DeckList(props) {
  return (
    <React.Fragment>
      {props.decks && props.decks.map((value) => {
        return (
          <View key={value.title}>
            <Text>{value.title}</Text>
            <Text>{value.questions.length}</Text>
          </View>
        );
      })}
    </React.Fragment>
  );
}


export default DeckList;
