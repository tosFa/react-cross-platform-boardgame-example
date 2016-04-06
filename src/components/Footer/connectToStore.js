import {throwDiceRequest} from '../../actions/game';

export const mapStateToProps = (state) => {
  return {
    turn: state.game.turn,
    player: state.player
  };
}

export const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    onPlayClick: () => {
      dispatch(throwDiceRequest(ownProps.player));
    }
  };
}
