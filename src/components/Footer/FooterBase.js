'use strict';


import { Component } from 'react';

export default class FooterBase extends Component {

  constructor(props) {
    super(props);
  }

  getLabel(name) {
    return "It's " + name + " turn";
  }

  getTurnLabel() {
    return (this.props.player.name === this.props.turn.name) ?
      this.getLabel('your') : this.getLabel(this.props.turn.name + "'s")
  }
};
