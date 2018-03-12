import {
  DECK_CREATE_SUCCESS,
  DECK_READ_ALL_SUCCESS,
  DECK_READ_SUCCESS } from '../actions/deckActions';


const initialState = {};


const deckReducer = (previousState=initialState, action) => {
  switch (action.type) {
    case DECK_CREATE_SUCCESS:
      return previousState;

    case DECK_READ_ALL_SUCCESS:
      return previousState;

    case DECK_READ_SUCCESS:
      return previousState;

    default:
      return previousState;
  }
};


export default deckReducer;