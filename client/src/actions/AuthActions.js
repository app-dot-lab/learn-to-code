import { LOG_IN, LOG_OUT } from './types'

export const Login = (payload = {}) => {
    return {
        type: LOG_IN,
        payload: payload
    }
}

export const Logout = {
    type: LOG_OUT
}