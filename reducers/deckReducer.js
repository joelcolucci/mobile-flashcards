import {
  DECK_CREATE_SUCCESS,
  DECK_READ_ALL_SUCCESS,
  DECK_READ_SUCCESS,
  DECK_CARD_CREATE_SUCCESS } from '../actions/deckActions';


const initialState = {};

const REDUCER_NAME = 'deck';
export const deck = (previousState=initialState, action) => {
  switch (action.type) {
    case DECK_CREATE_SUCCESS:
      return {
        ...previousState,
        [action.deck.id]: action.deck
      };

    case DECK_READ_ALL_SUCCESS:
      return {
        ...action.decks
      };

    case DECK_READ_SUCCESS:
      return previousState;

    case DECK_CARD_CREATE_SUCCESS:
      let { card } = action;
      return {
        ...previousState,
        [card.deckId]: {
          ...previousState[card.deckId],
          cards: [
            ...previousState[card.deckId].cards,
            card
          ]
        }
      };

    default:
      return previousState;
  }
};

export const selectDecks = (state) => {
  let deckReducer = state[REDUCER_NAME];

  return Object
    .keys(deckReducer)
    .map((key) => deckReducer[key])
    .sort((a, b) => a.title.localeCompare(b.title));
};

export const selectDeck = (state, deckId) => {
  let deckReducer = state[REDUCER_NAME];

  return deckReducer[deckId];
};
