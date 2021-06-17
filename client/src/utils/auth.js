import { useDispatch } from 'react-redux'
import { Login as LoginAction } from '../actions'

// TODO: Change this logic

export const getDefaultReduxState = () => {
    var user = localStorage.getItem('authUser')
    if (user) {
        user = JSON.parse(user)
        return {
            auth: {
                isLoggedIn: true,
                user
            }
        }
    }
}