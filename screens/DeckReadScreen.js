import PropTypes from 'prop-types';
import React from 'react';
import { Button, View, Text } from 'react-native';
import { connect } from 'react-redux';

import Heading from '../components/Heading';

import { fetchReadDeck } from '../actions/deckActions';
import { selectDeck } from '../reducers/deckReducer';

class DeckReadScreen extends React.Component {
  componentDidMount() {
    let { deckId } = this.props.navigation.state.params;

    this.props.dispatch(fetchReadDeck(deckId));
  }

  render() {
    let { deck, navigation } = this.props;
    return (
      <View>
        <Heading>{deck.title}</Heading>
        <Text>{deck.cards.length || 0} cards</Text>
        <Button
          title="Add card"
          onPress={() => navigation.navigate('DeckCardCreate', {deckId: deck.id})}/>
        <Button
          title="Start quiz"
          onPress={() => navigation.navigate('Quiz', {deckId: deck.id})}/>
      </View>
    );
  }
}

DeckReadScreen.navigationOptions = ({ navigation }) => {
  let { deckId } = navigation.state.params;
  return {
    title: deckId
  };
};

DeckReadScreen.propTypes = {
  deck: PropTypes.object,
  dispatch: PropTypes.func,
  navigation: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  let { deckId } = ownProps.navigation.state.params;
  let deck = selectDeck(state, deckId);
  return {
    deck: deck
  };
}

export default connect(mapStateToProps)(DeckReadScreen);
