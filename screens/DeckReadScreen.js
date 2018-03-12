import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { readDeck } from '../actions/deckActions';


class DeckReadScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let { deckId } = navigation.state.params;

    return {
      title: deckId
    }
  }

  componentDidMount() {
    let { deckId } = this.props.navigation.state.params;
  
    this.props.dispatch(readDeck(deckId));
  }

  render() {
    return (
      <View>
        <Text>Read deck</Text>
        <Text>{this.props.deck.title}</Text>
        <Text>{this.props.deck.questions.length}</Text>
      </View>
    );
  }
}


function mapStateToProps(state, ownProps) {
  let { deckId } = ownProps.navigation.state.params;
  return {
    deck: state.deckReducer[deckId]
  };
}


export default connect(mapStateToProps)(DeckReadScreen);
