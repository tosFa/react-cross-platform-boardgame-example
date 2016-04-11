/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './src/components/App/App';
import configureStore from './src/config/configureStore';
import {Provider} from 'react-redux';

const store = configureStore('ios');
console.log('module : ', module);
if (module.hot) {
  module.hot.accept(() => {
    const nextRootReducer = require('./src/reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}
store.dispatch({type: 'SET_PLATFORM', platform: 'ios'});

class boardgameExample extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('boardgameExample', () => boardgameExample);
