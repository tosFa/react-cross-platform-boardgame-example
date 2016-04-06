import initialState from '../states/game';

export default (state = initialState, action) => {
  switch (action.type) {
    case 'PLAYER_JOINED':
      return {
        ...state,
        players: add(state, action),
        turn : state.turn === '' ? {name: action.name, position: 0} : state.turn
      };
    case 'GAME_STATE':
      return {...action.game};
    case 'MOVE_PLAYER':
      return movePlayer(state, action);
  }

  return state;
}

function add(state, action) {
  if (state.players.length === 0) {
    return state.players.concat([{name: action.name, position: 0}]);
  }
  let currentIndex = state.players.map((player) => {return player.name}).indexOf(action.name);

  if (currentIndex === -1 ) {
    return state.players.concat([{name: action.name, position: 0}]);
  }

  return state.players;

}

function movePlayer(state, action) {
  return {
    ...state,
    players: state.players.map((player) => {
      if (player.name === action.player.name) {
        return {
          ...player,
          position: player.position + action.number
        }
      } else {
        return player;
      }
    }),
    turn: changeTurn(state, action)
  }
}

function changeTurn(state, action) {
  let currentIndex = state.players.map((player) => {return player.name}).indexOf(action.player.name);

  if (currentIndex >= state.players.length-1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  console.log('currentIndex : ', state.players.map((player) => {return player.name}).indexOf(action.player.name));
  return state.players[currentIndex];
}