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
    .then(parseJson)
    .then(formatDeckResults);
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
  let payload = JSON.stringify({
    [title]: {
      title
    }
  });

  return AsyncStorage.mergeItem(APP_STORAGE_KEY, payload);
};


/**
 * take in two arguments, title and card, and will add the card
 * to the list of questions for the deck with the associated title.
 * @param {String} title
 * @param {Object} card
 * @return {Promise}
 */
export const addCardToDeck = (title, card) => {
  let payload = JSON.stringify({
    [title.questions]: [
      ...title.questions,
      card
    ]
  });

  return AsyncStorage.mergeItem(APP_STORAGE_KEY, payload);
};


function formatDeckResults(store) {
  return Object.keys(store).map((value) => {
    let deck = store[value];
    return {
      title: deck.title,
      numberOfQuestions: deck.questions.length
    };
  });
}


function parseJson(string) {
  return JSON.parse(string);
}
