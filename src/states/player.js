'use strict';
/**
 * ## Import immutable record
 */
import {Record} from 'immutable';

/**
 * ## InitialState
 *
 * The fields we're concerned with
 */
const InitialState = {
  name: '',
  loggedIn: false,
  position: 0,
  input: '',
  isFetching: false
};

export default InitialState;
