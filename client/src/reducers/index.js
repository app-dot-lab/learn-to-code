import { combineReducers } from 'redux'
import { AuthReducer } from './AuthReducers'
import { ThemeReducer } from './ThemeReducers'

export default combineReducers({
    auth: AuthReducer,
    theme: ThemeReducer
})