'use strict';


import React from 'react';
import Render from './GameRender';


export default class Game extends React.Component {
  render() {
    return Render.call(this, this.props, this.state);
  }
};
