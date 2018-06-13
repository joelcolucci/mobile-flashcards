import React from 'react';
import { FlatList, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

import { readAllDecks } from '../actions/deckActions';
import { clearAsyncStorage } from '../utilities/StorageAPI';


class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.renderDeckItem = this.renderDeckItem.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(readAllDecks());
  }

  renderDeckItem({item}) {
    return (
      <View>
        <Text>{item.id}</Text>
        <Text>{item.title}</Text>
        <Text>{item.cards.length}</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('DeckDetails', {deckId: item.id})} />
      </View>
    );
  }

  render() {
    return (
      <View>
        <Text>This is the Home view</Text>
        <Button
          title="Clear AsyncStorage"
          onPress={() => clearAsyncStorage()} />

        <FlatList
          data={this.props.decks}
          renderItem={this.renderDeckItem} />
      </View>
    );
  }
}

function mapStateToProps(state, ownProps) {
  let decks = state.deckReducer;
  return {
    decks: Object.keys(decks).map((key) => {
      return decks[key];
    })
  };
}


export default connect(mapStateToProps)(HomeScreen);
