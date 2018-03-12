import React from 'react';
import { Text, View } from 'react-native';

import DeckCreateForm from '../components/DeckCreateForm';


function DeckCreateScreen() {
  return (
    <View>
      <Text>Create a new deck</Text>
      <DeckCreateForm />
    </View>
  );
}


export default DeckCreateScreen;
