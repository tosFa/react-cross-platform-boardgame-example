import {login, throwDice, setWinner, INITIAL_STATE} from './core';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN':
      return login(state, action.name);
    case 'THROW_DICE_REQUEST':
      return throwDice(state, action.number);
    case 'SET_WINNER':
      return setWinner(state, action.name)
  }
  return state;
}