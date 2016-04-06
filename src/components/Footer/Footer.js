'use strict';


import React from 'react';
import Base from './FooterBase';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './connectToStore';

class FooterPresentation extends Base {
  render() {

    return (
      <footer>
        <h1>You are currently on {this.props.player.position}</h1>
        <div className='footer-last-throw'>
          <h2>{this.getTurnLabel()}</h2>
        </div>
        <button
          disabled={!(this.props.player.name === this.props.turn.name)}
          onClick={this.props.onPlayClick}
        >
          Play
        </button>

      </footer>
    );
  }
}

const Footer = connect(mapStateToProps, mapDispatchToProps)(FooterPresentation);
export default Footer;