import React from 'react';
import { render } from 'react-dom';
import { createStore, compose} from 'redux';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import Routes from './routes';
import { rootReducer } from './reducers/index.js';
import './styles/main.css';

// import Photo from './components/Photo';



const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, devTools)
console.log('hey', rootReducer)

 // state :
 //user: ''
 //favorites: []
 //photos: []

render(
  <Provider store={store}>
    <Routes history={browserHistory} />
  </Provider>,
  document.getElementById('root')
)
