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
      .readDeck(title)
      .then((deck) => {
        dispatch(deckReadSuccess(deck));
      });
  };
};


/** CREATE */
export const DECK_CREATE_SUCCESS = 'DECK_CREATE_SUCCESS';

export const deckCreateSuccess = (title) => {
  return {
    type: DECK_CREATE_SUCCESS,
    title
  };
};

export const createDeck = (title) => {
  return (dispatch) => {
    return StorageAPI
      .saveDeckTitle(title)
      .then((title) => {
        dispatch(deckCreateSuccess(title));
      });
  };
};
