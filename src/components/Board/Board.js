'use strict';


import Base from './BoardBase';
import Field from '../Field/Field';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import React from 'react';
import {connect} from 'react-redux';
import {mapStateToProps} from './connectToStore';
var io = require('socket.io-client');

class BoardPresentation extends Base {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;

    this.socket = io('http://localhost:8888');
    this.socket.emit('NEW_PLAYER', {player: this.props.player});
    this.socket.on('game', function(data) {
      dispatch({type: 'GAME_STATE', game: data.game});
    });
  }

  render() {
    return (
      <div className='board'>
        <Header />
        <div className='flex-row'>
          <Field position={0}/>
          <Field position={1}/>
          <Field position={2}/>
          <Field position={3}/>
          <Field position={4}/>
        </div>
        <div className='flex-row-reverse'>
          <Field position={5}/>
          <Field position={6}/>
          <Field position={7}/>
          <Field position={8}/>
          <Field position={9}/>
        </div>
        <div className='flex-row'>
          <Field position={10}/>
          <Field position={11}/>
          <Field position={12}/>
          <Field position={13}/>
          <Field position={14}/>
        </div>
        <div className='flex-row-reverse'>
          <Field position={15}/>
          <Field position={16}/>
          <Field position={17}/>
          <Field position={18}/>
          <Field position={19}/>
        </div>
        <div className='flex-row'>
          <Field position={20}/>
          <Field position={21}/>
          <Field position={22}/>
          <Field position={23}/>
          <Field position={24}/>
        </div>
        <Footer player={this.props.player}/>
      </div>
    );
  }
};

const Board = connect(mapStateToProps)(BoardPresentation);
export default Board;