//import {
//  LOGIN_REQUEST,
//  LOGIN_INPUT_CHANGE
//} from '../constants/actionConstants';

import initialState from '../states/player';

export default (state = initialState, action) => {

  switch (action.type) {
    case 'LOGIN_REQUEST_SUCCESS':
      return {...state, name: action.name, loggedIn: true};
    case 'LOGIN_INPUT_CHANGE':
      return {...state, input: action.input};
    case 'GAME_STATE':
      return getNewPlayerPosition(state, action);
    default:
      return state;
  }

}

function getNewPlayerPosition(state, action) {
  let playerF =  action.game.players.filter(
    (player) => {
      return player.name === state.name;
    }
  )[0];
console.log('playerF : ', {...state, ...playerF}, state);
  return {...state, ...playerF};
}