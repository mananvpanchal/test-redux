export default (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT1':
      return ++state;
    default:
      return state;
  }
}
