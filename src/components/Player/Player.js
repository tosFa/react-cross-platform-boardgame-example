'use strict';

import React from 'react';
import appConstants from '../../constants/appConstants';
import Base from './PlayerBase'
import {connect} from 'react-redux';
import {mapStateToProps} from './connectToStore';

class PlayerPresentation extends Base {
  render() {
    return (
      <div
        className={'player' + (this.props.you ? ' you' : '')}
      >
        {this.props.player}
      </div>
    );
  }
}

const Player = connect()(PlayerPresentation);
export default Player;
