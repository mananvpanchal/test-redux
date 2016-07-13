export default (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT2':
      return ++state;
    default:
      return state;
  }
}
