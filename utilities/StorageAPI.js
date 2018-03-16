import { AsyncStorage } from 'react-native';
import uuid from 'uuid/v4';

const APP_STORAGE_KEY = 'mobile-flashcards';


export const createDeck = (title) => {
  let deck = {
    id: uuid(),
    title
  };

  return AsyncStorage
    .getItem(APP_STORAGE_KEY)
    .then(parseJson)
    .then((store) => {
      // Check/set initial store values
      if (!store) {
        store = {
          decks: {},
          cards: {}
        };
      }

      store.decks[deck.id] = deck;

      return AsyncStorage
        .setItem(APP_STORAGE_KEY, JSON.stringify(store));
    })
    .then(() => {
      return {
        ...deck,
        cards: []
      };
    });
};


export const getDecks = () => {
  return AsyncStorage
    .getItem(APP_STORAGE_KEY)
    .then(parseJson)
    .then((store) => {
      console.log(store);

      let joined = Object
        .keys(store.decks)
        .map((deckId) => {
          return {
            ...store.decks[deckId],
            cards: getCardsForDeck(store.cards, deckId)
          };
        })
        .reduce((accumulator, value) => {
          accumulator[value.id] = {...value};
          return accumulator;
        }, {});

      console.log(joined);
      return joined || {};
    });
};


export const getDeck = (deckId) => {
  return AsyncStorage
    .getItem(APP_STORAGE_KEY)
    .then(parseJson)
    .then((store) => {
      return {
        ...store.decks[deckId],
        cards: getCardsForDeck(store.cards, deckId)
      };
    });
};


export const addCardToDeck = (card) => {
  let newCard = {
    id: uuid(),
    deckId: card.deckId,
    question: card.question,
    answer: card.answer
  };

  return AsyncStorage
    .getItem(APP_STORAGE_KEY)
    .then(parseJson)
    .then((store) => {
      if (!store.cards) {
        store.cards = {};
      }

      store.cards[newCard.id] = newCard;
      return AsyncStorage
        .setItem(APP_STORAGE_KEY, JSON.stringify(store));
    })
    .then(() => {
      return newCard;
    });
};


export const updateCardStatus = (cardId, status) => {
  return AsyncStorage
    .getItem(APP_STORAGE_KEY)
    .then(parseJson)
    .then((store) => {
      store.cards[cardId].status = status;

      return AsyncStorage
        .setItem(APP_STORAGE_KEY, JSON.stringify(store));
    })
    .then(() => {
      return card;
    });
};


export const clearAsyncStorage = () => {
  return AsyncStorage
    .clear();
};


function parseJson(string) {
  return JSON.parse(string);
}

function getCardsForDeck(cards, deckId) {
  if (!cards) {
    return [];
  }
  return Object
    .keys(cards)
    .map((cardId) => cards[cardId])
    .filter((card) => card.deckId === deckId);
}
