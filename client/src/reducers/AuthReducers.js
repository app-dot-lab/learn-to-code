import { LOG_IN, LOG_OUT } from '../actions/types'

// Convert this to a middleware

const INIT_STATE = () => {
    const user = localStorage.getItem('authUser')
    const isLoggedIn = false

    if(user) return {isLoggedIn: true, user: JSON.parse(user)}
    else return {isLoggedIn: true, user: {}}
}

export const AuthReducer = (state = INIT_STATE, action) => {
    switch(action.type) {
        case LOG_IN:
            return {
                ...INIT_STATE,
                isLoggedIn: true,
                user: action.payload
            }
        case LOG_OUT:
            return {...INIT_STATE, isLoggedIn: false}
        default:
            return {...INIT_STATE, isLoggedIn: false}
    }
}