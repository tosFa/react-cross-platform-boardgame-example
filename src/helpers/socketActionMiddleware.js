export default socket => store => next => action => {
  if (action.socket && action.socket) {
    socket.emit(action.type, action);
  }
  return next(action);
}