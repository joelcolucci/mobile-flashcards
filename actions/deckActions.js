import * as StorageAPI from '../utilities/StorageAPI';

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
      .createDeck(title)
      .then((deck) => {
        dispatch(deckCreateSuccess(deck));
      });
  };
};


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

export const readDeck = (deckId) => {
  return (dispatch) => {
    return StorageAPI
      .getDeck(deckId)
      .then((deck) => {
        dispatch(deckReadSuccess(deck));
      });
  };
};


/** ADD CARD */
export const DECK_ADD_CARD_SUCCESS = 'DECK_ADD_CARD_SUCCESS';

export const deckAddCardSuccess = (card) => {
  return {
    type: DECK_ADD_CARD_SUCCESS,
    card
  };
};

export const addCardToDeck = (card) => {
  return (dispatch) => {
    return StorageAPI
      .addCardToDeck(card)
      .then((card) => {
        dispatch(deckAddCardSuccess(card));
      });
  };
};

/** Update Card Status */
export const CARD_STATUS_UPDATE_SUCCESS = 'CARD_STATUS_UPDATE_SUCCESS';

export const cardStatusUpdateSuccess = (card) => {
  return {
    type: CARD_STATUS_UPDATE_SUCCESS,
    card
  };
};

export const updateCardStatus = (title, question, status) => {
  return (dispatch) => {
    return StorageAPI
      .updateCardStatus(title, question, status)
      .then((card) => {
        dispatch(cardStatusUpdateSuccess(card));
      });
  };
};
