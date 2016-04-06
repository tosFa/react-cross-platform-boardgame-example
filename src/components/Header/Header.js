'use strict';


import React from 'react';
import Base from './HeaderBase';
import {connect} from 'react-redux';

class HeaderPresentation extends Base {
  render() {
    return (
      <header>
        <h1>Hello {this.props.name}, welcome to the boardgame </h1>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.player.name
  };
}

const Header = connect(mapStateToProps)(HeaderPresentation);
export default Header;