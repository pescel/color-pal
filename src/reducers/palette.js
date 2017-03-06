export const palette = (state = '', action) => {
  switch(action.type) {
    case 'DELETE_PALETTE':
      return ''
    case 'STORE_PALETTE':
      return action.palette
    default:
      return state;

  }
  return state;
}
