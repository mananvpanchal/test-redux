export default (state = 100, action) => {
  switch(action.type) {
    case 'DECREMENT':
      return --state;
    default:
      return state;
  }
}
