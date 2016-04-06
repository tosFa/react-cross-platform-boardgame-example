'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './src/components/Routes';
import {Provider} from 'react-redux';
import configureStore from './src/config/configureStore'
require ('./src/styles/main.css');
require ('./src/styles/normalize.css');

const store = configureStore('web');
store.dispatch({type: 'SET_PLATFORM', platform: 'web'});

ReactDOM.render(
  (
    <Provider store={store}>
      <Routes />
    </Provider>
  ),
  document.getElementById('app')
);