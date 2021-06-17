import { LOG_IN, LOG_OUT } from "../../actions/types"

export const AuthReducerMiddleware = store => next => action => {
    switch(action.type) {
        case LOG_IN:
            localStorage.setItem('authUser', JSON.stringify(action.payload))
            break
        case LOG_OUT:
            localStorage.removeItem('authUser')
            break
    }
    return next(action)
}