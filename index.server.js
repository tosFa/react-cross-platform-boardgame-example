require("babel-register")({
  presets: [
    "es2015-node5"
  ],
});

import makeStore from './src/server/store';
import startScoketServer from './src/server/socket';
import expressServer from './src/server/express';
import configureStore from './src/config/configureStore';
import gameInitialState from './src/states/game';

const store = configureStore('server', {game: gameInitialState});
store.dispatch({type: 'SET_PLATFORM', platform: 'server'});
startScoketServer(store);