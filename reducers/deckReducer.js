import {
  DECK_CREATE_SUCCESS,
  DECK_READ_ALL_SUCCESS,
  DECK_CARD_CREATE_SUCCESS,
  DECK_CARD_UPDATE_SUCCESS,
  DECK_QUIZ_RESET_SUCCESS } from '../actions/deckActions';


const initialState = {
  decksById: {}
};

const REDUCER_NAME = 'deck';
export const deck = (previousState=initialState, action) => {
  switch (action.type) {
    case DECK_CREATE_SUCCESS:
      return {
        ...previousState,
        decksById: {
          ...previousState.decksById,
          [action.deck.id]: action.deck
        }
      };

    case DECK_READ_ALL_SUCCESS:
      return {
        ...previousState,
        decksById: {
          ...action.decks
        }
      };

    case DECK_CARD_CREATE_SUCCESS:
      let { card } = action;
      return {
        ...previousState,
        decksById: {
          ...previousState.decksById,
          [card.deckId]: {
            ...previousState.decksById[card.deckId],
            cards: [
              ...previousState.decksById[card.deckId].cards,
              card
            ]
          }
        }
      };

    case DECK_CARD_UPDATE_SUCCESS: {
      let { card } = action;
      let deckCards = previousState.decksById[card.deckId].cards;

      for (let i = 0; i < deckCards.length; i++) {
        if (deckCards[i].id === card.id) {
          deckCards[i] = card;
          break;
        }
      }
      return {
        ...previousState,
        decksById: {
          ...previousState.decksById,
          [card.deckId]: {
            ...previousState.decksById[card.deckId],
            cards: [
              ...deckCards
            ]
          }
        }
      };
    }

    case DECK_QUIZ_RESET_SUCCESS:
      let { deckId, cards } = action;
      return {
        ...previousState,
        decksById: {
          ...previousState.decksById,
          [deckId]: {
            ...previousState.decksById[deckId],
            cards: [
              ...cards
            ]
          }
        }
      };

    default:
      return previousState;
  }
};

export const selectDecks = (state) => {
  let deckReducer = state[REDUCER_NAME];

  return Object
    .keys(deckReducer.decksById)
    .map((key) => deckReducer.decksById[key])
    .sort((a, b) => a.title.localeCompare(b.title));
};

export const selectDeck = (state, deckId) => {
  let deckReducer = state[REDUCER_NAME];

  return deckReducer.decksById[deckId];
};
