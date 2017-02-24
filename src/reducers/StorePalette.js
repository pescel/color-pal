export const storePalette = (state = '', action) => {
  switch(action.type) {
    case 'LOAD_PHOTO':
      return action.photo
    case 'DELETE_PALETTE':
      return ""
    default:
      return state;
  }
  return state;
}
