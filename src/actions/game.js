//require('../helpers/userAgent');
var io = require('socket.io-client');
let socket = io('http://localhost:8888');

export function throwDiceRequest(player) {
  socket.emit('THROW_DICE_REQUEST', {player: player});
  return {type: 'THROW_DICE_REQUEST', player: player};
}