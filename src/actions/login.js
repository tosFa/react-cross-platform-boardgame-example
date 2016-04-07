
import config from '../config/config.api';

export function loginRequest() {
  return {
    type: 'LOGIN_REQUEST',
    isFetching: true
  }
}

export function loginRequestFailed(name, error) {
  return {
    type: 'LOGIN_REQUEST_FAILED',
    name: name,
    error: error
  }
}

export function loginRequestSuccess(name) {
  return {
    type: 'LOGIN_REQUEST_SUCCESS',
    name: name,
    isFetching: false
  }
}

export function loginInputChange(name) {
  return {
    type: 'LOGIN_INPUT_CHANGE',
    input: name
  }
}

export function login(name) {
  return (dispatch, getState) => {
    let serverName = 'localhost';

    if (getState().device.platform === 'android') {
      serverName = '10.0.3.2';
    }
    if (getState().player.isLoggedIn === true) {
      return dispatch(loginRequestSuccess(name))
    }
    dispatch(loginRequest());

    fetch('http://' + serverName + ':3000/login/?name=' + name)
      .then(response => response.json())
      .then(json => dispatch(loginRequestSuccess(name)))
      .catch(error => dispatch(loginRequestFailed(name, error)));
  }
}