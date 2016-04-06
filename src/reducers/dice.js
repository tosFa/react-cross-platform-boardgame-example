import initialState from '../states/game';

export default (state = initialState, action) => {
  switch (action.type) {
    case 'THROW_DICE_REQUEST':
      return {
        ...state,
        number: action.number,
        player: {
          ...action.player,
          position: action.player.position + action.number
        }
      };
    case 'NEW_PLAYER_JOINED':
    case 'PLAYER_EXITED':
    case 'PLAYER_MOVE':
  }
  return state;
}