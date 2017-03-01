export const photo = (state = '', action) => {
  switch(action.type) {
    case 'LOAD_PHOTO':
      return action.photo
    default:
      return state
    }
}
