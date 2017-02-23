// import React, { Component } from 'react';
// import Button from './Button';
//
// export default class Login extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       email: '',
//       password: '',
//       newUser: '',
//       newUserEmail: '',
//       newUserPassword: '',
//     }
//     this.updateLogin = this.updateInput.bind(this)
//   }
//
//   updateLogin(e) {
//     this.setState({ [e.target.id]: e.target.value })
//   }
//
//   render() {
//     const {addUser} = this.props;
//     const {email, password, newUser, newUserEmail, newUserPassword} = this.state
//     return(
//       <div>
//         <form onSubmit={(e) => {
//           e.preventDefault(
//             fetchLogin(email, password)
//             this.setState({ email: '', password: '' })
//         }}>
//
//           <input className='input-email'
//                  placeholder='youremail@email.com'
//                  id='email'
//                  onChange={this.updateLogin}
//                  value={email}
//           />
//           <input className='input-password'
//                  placeholder='Password'
//                  id='password'
//                  onChange={this.updateLogin}
//                  value={password}
//           />
//           <button className='login-btn'>Login</button>
//         </form>
//
//         <form onSubmit={(e) => {
//           e.preventDefault()
//           addUser(newUser, newUserEmail, newUserPassword)
//           this.setState({ newUser: '', newUserEmail: '', newUserPassword: ''})
//         }}>
//           <input className='new-name-input'
//                  placeholder='Your Name'
//                  id='newUser'
//                  onChange={this.updateLogin}
//                  value={newUser}
//           />
//           <input className='new-email-input'
//                  placeholder='youremail@email.com'
//                  id='newUserEmail'
//                  onChange={this.updateLogin}
//                  value={newUserEmail}
//           />
//           <input className='new-password-input'
//                  placeholder='Create a Password'
//                  id='newUserPassword'
//                  onChange={this.updateLogin}
//                  value={newUserPassword}
//           />
//           <button className='add-user-btn'>Create Account</button>
//         </form>
//       </div>
//     )
//   }
// }
