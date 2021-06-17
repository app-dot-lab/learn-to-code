import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'

import App from './components/App'
import reducers from './reducers'
import { AuthReducerMiddleware } from './middlewares/reducers/auth'
import { getDefaultReduxState } from './utils/auth'

import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(AuthReducerMiddleware))

const store = createStore(reducers, getDefaultReduxState(), enhancer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'))