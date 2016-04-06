import Server from 'socket.io';
const MAX = 7;
const MIN = 1;
export default function startScoketServer(store = {}) {
  const io = new Server().attach(8888);
  //store.subscribe(
  //  () => io.emit('state', store.getState().toJS())
  //);
  store.subscribe(
    () => io.emit('game', {game: store.getState().game})
  );

  io.on('connection', (socket) => {
    socket.on('NEW_PLAYER', (data) =>
      store.dispatch({type: 'PLAYER_JOINED', name: data.player.input})
    );
    socket.on('THROW_DICE_REQUEST', (data) =>
    {
      store.dispatch({
        type: 'MOVE_PLAYER',
        player: data.player,
        number: Math.ceil(Math.random() * (MAX - MIN) + MIN)
      })
    }
    );
  });

  return io;

}