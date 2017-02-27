export const storePalette = (state = '', action) => {
  switch(action.type) {
    case 'LOAD_PHOTO':
      return action.photo
    case 'DELETE_PALETTE':
      return ""
    case 'LOAD_PALETTE':
      return action.palette
    console.log('palpalpal!')
    default:
      return state;
  }
  return state;
}
