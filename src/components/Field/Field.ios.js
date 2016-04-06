'use strict';

import React, {
  Text,
  View,
  StyleSheet
} from 'react-native';
import appConstants from '../../constants/appConstants';
import Base from './FieldBase'
import {connect} from 'react-redux';
import {mapStateToProps} from './connectToStore';

const componentStyle = require('./styles').default;
const style = StyleSheet.create(componentStyle);

class FieldPresentation extends Base {
  render() {
    return (
      <View style={[style.field, {borderWidth: 1, borderColor: 'blue'}]}>
        <View>
          <Text style={style.text}>{this.props.position}</Text>
        </View>
        <View>
          {this.renderPlayers()}
        </View>
      </View>
    );
  }
}

const Field = connect(mapStateToProps)(FieldPresentation);
export default Field;
