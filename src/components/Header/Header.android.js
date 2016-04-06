'use strict';


import React, {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Base from './HeaderBase';
import {connect} from 'react-redux';

const componentStyle = require('./styles').default;
const style = StyleSheet.create(componentStyle);

class HeaderPresentation extends Base {
  render() {
    return (
      <View style={style.header}>
        <Text>Hello {this.props.name}, you are awesome!!!!!!! </Text>
      </View>
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