import { LIGHT_MODE, DARK_MODE } from "../actions/types";

export const ThemeReducer = (state = {mode: DARK_MODE}, action) => {
    switch (action.type) {
        case LIGHT_MODE:
            return {...state, mode: LIGHT_MODE}
        case DARK_MODE:
            return {...state, mode: DARK_MODE}
        default:
            return state
    }
}