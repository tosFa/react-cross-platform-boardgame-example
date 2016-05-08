'use strict';


import Base from './LoginBase';
import React from 'react';
import {
  LOGIN_REQUEST,
  LOGIN_INPUT_CHANGE
} from '../../constants/appConstants';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './connectToStore';

class LoginPresentation extends Base {

  constructor(props) {
    super(props);
  }

  render() {

    let input;

    return (
      <div className='login'>
        <input
          ref={node => {
            input = node;
          }}
          onChange={
            () => this.props.onChange(input.value)
          }
          value={this.props.input}
        />
        <button
          className='login-button'
          onClick={ () => this.props.onClick(input.value) }
        >
         Log in you fool !!!
        </button>
      </div>

    );
  }
};


const Login = connect(mapStateToProps,mapDispatchToProps)(LoginPresentation);

export default Login;
