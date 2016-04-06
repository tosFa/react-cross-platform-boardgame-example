require('../helpers/userAgent');
var io =require('socket.io-client/socket.io');
var socket = io('http://localhost:8888', {transports: ['websocket']});

export function throwDiceRequest(player) {
  socket.emit('THROW_DICE_REQUEST', {player: player});
  return {type: 'THROW_DICE_REQUEST', player: player};
}