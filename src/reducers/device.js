export default (state = {}, action) => {
  switch(action.type) {
    case 'SET_PLATFORM':
      return {...state, platform: action.platform};
  }

  return state;
}