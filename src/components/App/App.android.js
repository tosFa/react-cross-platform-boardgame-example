'use strict';


import React, {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Board from '../Board/Board';
import Login from '../Login/Login';
import Base from './AppBase';
import {mapStateToProps} from './connectToStore';
import {connect} from 'react-redux';

const componentStyle = require('./styles').default;
const style = StyleSheet.create(componentStyle);

class AppPresentation extends Base {

  render() {
    return (
      <View style={style.app}>
        {this.renderContent()}
      </View>
    );
  }

  renderContent() {
    console.log('rendering app component in android');
    if (this.props.loggedIn === true) {
      return (<Board />);
    }
    return (<Login />);
  }
}
;
const App = connect(mapStateToProps)(AppPresentation);

export default App;
