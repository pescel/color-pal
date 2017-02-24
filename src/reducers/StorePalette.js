export const storePalette = (state = '', action) => {
  switch(action.type) {
    case 'LOAD_PHOTO':
     return action.photo
    //  console.log('action', action);
  }
  return state;
}
