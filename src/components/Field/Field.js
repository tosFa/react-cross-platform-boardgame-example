'use strict';

import React from 'react';
import appConstants from '../../constants/appConstants';
import Base from './FieldBase'
import Player from '../Player/Player'
import {connect} from 'react-redux';
import {mapStateToProps} from './connectToStore';

class FieldPresentation extends Base {
  render() {
    return (
      <div className='field'>
        <div className='position'>
          {this.props.position}
        </div>
        {this.renderPlayers()}
      </div>
    );
  }
}

const Field = connect(mapStateToProps)(FieldPresentation);
export default Field;
