/**
 * # configureStore.js
 *
 * A Redux boilerplate setup
 *
 */
'use strict';

/**
 * ## Imports
 *
 * redux functions
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';

/**
 * ## Reducer
 * The reducer contains the 4 reducers from
 * device, global, auth, profile
 */
import reducer from '../reducers';
/**
 * ## configureStore
 * @param {Object} the state with for keys:
 * device, global, auth, profile
 *
 */
export default function configureStore(platform, initialState) {

  if (platform === 'web') {
    //web store
    const createStoreWithMiddleware = compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore);
    return createStoreWithMiddleware(reducer, initialState);
  } else if (platform === 'server') {
    //server store
    return createStore(reducer, initialState);
  } else {
    //native store
    const createStoreWithMiddleware = compose(
      applyMiddleware(thunk),
      devTools()
    )(createStore);
    return createStoreWithMiddleware(reducer, initialState);
  }

};
