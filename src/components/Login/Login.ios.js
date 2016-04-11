'use strict';

import React, {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight
} from 'react-native';
import Base from './LoginBase';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './connectToStore';

const componentStyle = require('./styles').default;
const style = StyleSheet.create(componentStyle);

class LoginPresentation extends Base {
  render() {
    return (
      <View style={style.loginWrapper}>
        <View style={style.login}>
          <TextInput
            style={style.inputText}
            placeholder={'Enter your name here'}
            value={this.props.input}
            onChangeText={text => this.props.onChange(text)}
          />
          <TouchableHighlight
            style={style.button}
            onPress={() => this.props.onClick(this.props.input)}
          >
            <Text>Login</Text>
          </TouchableHighlight>

        </View>
      </View>
    );
  }
}
const Login = connect(mapStateToProps,mapDispatchToProps)(LoginPresentation);
export default Login;
