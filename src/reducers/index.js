/**
 * # reducers
 * 
 * This class combines all the reducers into one
 * 
 */
'use string';

import player from './player';
import dice from './dice';
import game from './game';
import device from './device';

import { combineReducers } from 'redux';

/**
 * ## CombineReducers
 * 
 * the rootReducer will call each and every reducer with the state and action
 * EVERY TIME there is a basic action
 */ 
const rootReducer = combineReducers({
  player,
  dice,
  game,
  device
});

export default rootReducer;
