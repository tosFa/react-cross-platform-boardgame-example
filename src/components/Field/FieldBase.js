'use strict';


import React from 'react';
import Player from '../Player/Player'


export default class FieldBase extends React.Component {

  constructor(props) {
    super(props);
  }

  renderPlayers() {
    return this.props.game.players.filter(player => {
      return (player.position === this.props.position);
    }).map(player => {
      return (<Player key={Math.random() + player.name} player={player.name} you={this.props.player.name === player.name} />)
    });
  }

};
