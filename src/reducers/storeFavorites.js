export const storePalette = (state = '', action) => {
  switch(action.type) {
    case: 'ADD_FAVORITE':
      return {
        action.photo,
        action.palette
      }
      default:
        return state;
  }
}
