import React from 'react';
import { render } from 'react-dom';
import { createStore, compose} from 'redux';
import { Provider } from 'react-redux';
import { browserHistory, Route, Router } from 'react-router';
import { rootReducer } from './reducers/index.js';
import './styles/main.css';
import App from './components/App.js'
import FavoritesContainer from './containers/FavoritesContainer.js'

// import Photo from './components/Photo';



const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, devTools)


render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App} />
      <Route path='/favorites' component={FavoritesContainer} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
