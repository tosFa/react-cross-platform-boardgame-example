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

const store = configureStore('android');
store.dispatch({type: 'SET_PLATFORM', platform: 'android'});
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
