import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import App from './components/App'
import reducers from './reducers'
import { AuthReducerMiddleware } from './middlewares/reducers/auth'
import { ThemeReducerMiddleware } from './middlewares/reducers/themes'
import { getDefaultReduxState } from './utils/auth'

import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

const persistedReducer = persistReducer({key: 'root', storage}, reducers)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(ThemeReducerMiddleware))
const store = createStore(persistedReducer, enhancer)
const persistor = persistStore(store)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'))