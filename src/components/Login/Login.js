'use strict';


import Base from './LoginBase';
import React from 'react';
import {
  LOGIN_REQUEST,
  LOGIN_INPUT_CHANGE
} from '../../constants/appConstants';
import {connect} from 'react-redux';
import {mapDispatchToProps} from './connectToStore';

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
        />
        <button
          style={{background: 'blue'}}
          onClick={ () => this.props.onClick(input.value) }
        >
         Log in
        </button>
      </div>

    );
  }
};


const Login = connect(null,mapDispatchToProps)(LoginPresentation);

export default Login;
