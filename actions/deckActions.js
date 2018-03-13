import * as StorageAPI from '../utilities/StorageAPI';


/** READ ALL */
export const DECK_READ_ALL_SUCCESS = 'DECK_READ_ALL_SUCCESS';

export const deckReadAllSuccess = (decks) => {
  return {
    type: DECK_READ_ALL_SUCCESS,
    decks
  };
};

export const readAllDecks = () => {
  return (dispatch) => {
    return StorageAPI
      .getDecks()
      .then((decks) => {
        dispatch(deckReadAllSuccess(decks));
      });
  };
};


/** READ */
export const DECK_READ_SUCCESS = 'DECK_READ_SUCCESS';

export const deckReadSuccess = (deck) => {
  return {
    type: DECK_READ_SUCCESS,
    deck
  };
};

export const readDeck = (title) => {
  return (dispatch) => {
    return StorageAPI
      .getDeck(title)
      .then((deck) => {
        dispatch(deckReadSuccess(deck));
      });
  };
};


/** CREATE */
export const DECK_CREATE_SUCCESS = 'DECK_CREATE_SUCCESS';

export const deckCreateSuccess = (deck) => {
  return {
    type: DECK_CREATE_SUCCESS,
    deck
  };
};

export const createDeck = (title) => {
  return (dispatch) => {
    return StorageAPI
      .saveDeckTitle(title)
      .then((deck) => {
        dispatch(deckCreateSuccess(deck));
      });
  };
};

/** ADD CARD */
export const DECK_ADD_CARD_SUCCESS = 'DECK_ADD_CARD_SUCCESS';

export const deckAddCardSuccess = (deck) => {
  return {
    type: DECK_ADD_CARD_SUCCESS,
    deck
  };
};

export const addCardToDeck = (deckTitle, card) => {
  return (dispatch) => {
    return StorageAPI
      .addCardToDeck(deckTitle, card)
      .then((card) => {
        dispatch(deckAddCardSuccess({
          card,
          title: deckTitle
        }));
      });
  };
};
