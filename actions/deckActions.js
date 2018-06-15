import * as StorageAPI from '../utilities/StorageAPI';


export const DECK_CREATE_REQUEST = 'DECK_CREATE_REQUEST';
export const DECK_CREATE_ERROR = 'DECK_CREATE_ERROR';
export const DECK_CREATE_SUCCESS = 'DECK_CREATE_SUCCESS';

export const makeDeckCreateRequest = () => {
  return {
    type: DECK_CREATE_REQUEST
  };
};

export const makeDeckCreateError = () => {
  return {
    type: DECK_CREATE_ERROR
  };
};

export const makeDeckCreateSuccess = (deck) => {
  return {
    type: DECK_CREATE_SUCCESS,
    deck
  };
};

export const fetchCreateDeck = (title) => {
  return (dispatch) => {
    return StorageAPI
      .createDeck(title)
      .then((deck) => {
        dispatch(makeDeckCreateSuccess(deck));
      });
  };
};


export const DECK_READ_ALL_REQUEST = 'DECK_READ_ALL_REQUEST';
export const DECK_READ_ALL_ERROR = 'DECK_READ_ALL_ERROR';
export const DECK_READ_ALL_SUCCESS = 'DECK_READ_ALL_SUCCESS';

export const makeDeckReadAllRequest = () => {
  return {
    type: DECK_READ_ALL_REQUEST
  };
};

export const makeDeckReadAllError = () => {
  return {
    type: DECK_READ_ALL_ERROR
  };
};

export const makeDeckReadAllSuccess = (decks) => {
  return {
    type: DECK_READ_ALL_SUCCESS,
    decks
  };
};

export const fetchReadAllDecks = () => {
  return (dispatch) => {
    return StorageAPI
      .getDecks()
      .then((decks) => {
        dispatch(makeDeckReadAllSuccess(decks));
      });
  };
};


export const DECK_READ_REQUEST = 'DECK_READ_REQUEST';
export const DECK_READ_ERROR = 'DECK_READ_ERROR';
export const DECK_READ_SUCCESS = 'DECK_READ_SUCCESS';

export const makeDeckReadRequest = () => {
  return {
    type: DECK_READ_REQUEST
  };
};

export const makeDeckReadError = () => {
  return {
    type: DECK_READ_ERROR
  };
};

export const makeDeckReadSuccess = (deck) => {
  return {
    type: DECK_READ_SUCCESS,
    deck
  };
};

export const fetchReadDeck = (deckId) => {
  return (dispatch) => {
    return StorageAPI
      .getDeck(deckId)
      .then((deck) => {
        dispatch(makeDeckReadSuccess(deck));
      });
  };
};


export const DECK_CARD_CREATE_REQUEST = 'DECK_CARD_CREATE_REQUEST';
export const DECK_CARD_CREATE_ERROR = 'DECK_CARD_CREATE_ERROR';
export const DECK_CARD_CREATE_SUCCESS = 'DECK_CARD_CREATE_SUCCESS';

export const makeDeckCardCreateRequest = () => {
  return {
    type: DECK_CARD_CREATE_REQUEST
  };
};

export const makeDeckCardCreateError = () => {
  return {
    type: DECK_CARD_CREATE_ERROR
  };
};

export const makeDeckCardCreateSuccess = (card) => {
  return {
    type: DECK_CARD_CREATE_SUCCESS,
    card
  };
};

export const fetchCreateDeckCard = (card) => {
  return (dispatch) => {
    return StorageAPI
      .addCardToDeck(card)
      .then((card) => {
        dispatch(makeDeckCardCreateSuccess(card));
      });
  };
};


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
