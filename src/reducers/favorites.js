export const favorites = (state = [], action) => {
  switch(action.type) {
    case 'ADD_FAVORITE':
      const found = state.some(favorite => {
        return favorite.photo === action.photo
      })

      if (found) {
        return state
      }

      return [...state,
          {
            photo: action.photo,
            palette: action.palette
          }
        ]

    default:
      return state;
  }
}
