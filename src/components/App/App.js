'use strict';


import React from 'react';
import Base from './AppBase';
import Login from '../Login/Login';
import Board from '../Board/Board';
import {connect} from 'react-redux';
import {mapStateToProps} from './connectToStore';

class AppPresentation extends Base {

  render() {
    if (this.props.loggedIn === true) {
      return (<Board />);
    }
    return (
      <Login />
    );
  }
};

const App = connect(mapStateToProps)(AppPresentation);

export default App;
