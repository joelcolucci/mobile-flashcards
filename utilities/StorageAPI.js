import { AsyncStorage } from 'react-native';

const APP_STORAGE_KEY = 'mobile-flashcards';
/*
{
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}
*/

/**
 * return all of the decks along with their titles, questions, and answers.
 * @return {Promise}
 */
export const getDecks = () => {
  return AsyncStorage
    .getItem(APP_STORAGE_KEY)
    .then(parseJson);
};


/**
 * take in a single title argument and return the deck
 * associated with that title.
 * @param {String} title
 * @return {Object}
 */
export const getDeck = (title) => {
  return AsyncStorage
    .getItem(APP_STORAGE_KEY)
    .then(parseJson)
    .then((store) => {
      return store[title];
    });
};


/**
 * take in a single title argument and add it to the decks
 * @param {String} title
 * @return {Promise}
 */
export const saveDeckTitle = (title) => {
  let deck = {
    title,
    questions: []
  };

  let mergeItem = {
    [title]: deck
  };

  return AsyncStorage
    .mergeItem(APP_STORAGE_KEY, JSON.stringify(mergeItem))
    .then(() => {
      return deck;
    });
};


/**
 * take in two arguments, title and card, and will add the card
 * to the list of questions for the deck with the associated title.
 * @param {String} title
 * @param {Object} card
 * @return {Promise}
 */
export const addCardToDeck = (title, card) => {
  let payload = {
    [title]: {
      questions: [
        card
      ]
    }
  };

  return AsyncStorage
    .getItem(APP_STORAGE_KEY)
    .then(parseJson)
    .then((store) => {
      let updatedStore = {
        ...store,
        [title]: {
          ...store[title],
          questions: [
            ...store[title].questions,
            card
          ]
        }
      };

      return AsyncStorage.setItem(APP_STORAGE_KEY, JSON.stringify(updatedStore));
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
