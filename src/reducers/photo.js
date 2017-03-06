export const photo = (state = '', action) => {
  switch(action.type) {
    case 'LOAD_PHOTO':
      return action.photo
    case 'DELETE_PHOTO':
      return ''
    default:
      return state
    }
}
