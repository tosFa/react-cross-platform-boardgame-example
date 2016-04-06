import keyMirror from 'keyMirror';

export default keyMirror({
  SET_PLATFORM: null,
  SET_VERSION: null,

  LOGIN_INPUT_CHANGE: null,

  ON_LOGIN_STATE_CHANGE: null,
  LOGIN_STATE_LOGOUT: null,
  LOGIN_STATE_REGISTER: null,
  LOGIN_STATE_LOGIN: null,
  LOGIN_STATE_FORGOT_PASSWORD: null,

  LOGIN_REQUEST: null,
  LOGIN_SUCCESS: null,
  LOGIN_FAILURE: null,

  LOGOUT_REQUEST: null,
  LOGOUT_SUCCESS: null,
  LOGOUT_FAILURE: null,

  LOGGED_IN: null,
  LOGGED_OUT: null,

  GET_PROFILE_REQUEST: null,
  GET_PROFILE_SUCCESS: null,
  GET_PROFILE_FAILURE: null,

  THROW_DICE: null,
  THROW_DICE_SUCCESS: null,
  THROW_DICE_FAILURE: null,

  MOVE_PIECE: null,
  MOVE_PIECE_SUCCESS: null,
  MOVE_PIECE_FAILURE: null,

  END_GAME: null,
  END_GAME_SUCCESS: null,
  END_GAME_FAILURE: null,

  SET_STATE: null,
  GET_STATE: null,
  SET_STORE: null
});
