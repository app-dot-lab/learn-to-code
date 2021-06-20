import { DARK_MODE, LIGHT_MODE } from "../../actions/types"

export const ThemeReducerMiddleware = ({ getState }) => next => (action) => {
    switch(action.type) {
        case LIGHT_MODE:
            document.getElementsByTagName('body')[0].classList.remove('dark')
            break
        case DARK_MODE:
            document.getElementsByTagName('body')[0].classList.add('dark')
            break
        default: 
            const mode = getState().theme.mode
            switch(mode) {
                case LIGHT_MODE:
                    document.getElementsByTagName('body')[0].classList.remove('dark')
                    break
                case DARK_MODE:
                    document.getElementsByTagName('body')[0].classList.add('dark')
                    break
            }
    }
    return next(action)
}