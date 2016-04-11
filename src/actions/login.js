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
    if (getState().player.isLoggedIn === true) {
      return dispatch(loginRequestSuccess(name))
    }

    dispatch(loginRequest());
    fetch(config[getState().device.platform].apiUrl + '/login/?name=' + name)
      .then(response => response.json())
      .then(json => dispatch(loginRequestSuccess(name)))
      .catch(error => dispatch(loginRequestFailed(name, error)));
  }
}