const userSignIn = (state = {}, action) => {
  switch (action.type) {
    case 'SIGN_IN' :
      return {
        email: action.email,
        password: action.password,
        user: action.user
      }
    default:
      return state;
  }
}

export default userSignIn;
