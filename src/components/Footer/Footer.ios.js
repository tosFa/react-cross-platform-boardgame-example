'use strict';


import React, {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import Base from './FooterBase';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './connectToStore';

const componentStyle = require('./styles').default;
let style = StyleSheet.create(componentStyle);

class FooterPresentation extends Base {
  render() {
    return (
      <View style={style.footer}>
        <Text>You're currently on position : {this.props.player.position}</Text>
        <TouchableHighlight
          style={style.playButton}
          onPress={((this.props.player.name === this.props.turn.name)) ? this.props.onPlayClick : function(){}}>
          <Text>Play</Text>
        </TouchableHighlight>
        <Text>{this.getTurnLabel()}</Text>
      </View>
    );
  }
}

const Footer = connect(mapStateToProps, mapDispatchToProps)(FooterPresentation);
export default Footer;