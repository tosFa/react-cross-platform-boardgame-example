import {login, loginInputChange} from '../../actions/login';

export const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (val) => dispatch(loginInputChange(val)),
    onClick: (val) => {dispatch(login(val))}
  }
}

export const mapStateToProps = (state) => {
  return {
    input: state.player.input
  }
}