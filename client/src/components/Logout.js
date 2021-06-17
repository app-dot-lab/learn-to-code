import { useDispatch } from "react-redux"
import { Redirect } from "react-router"
import { useHistory } from "react-router-dom";

import { Logout as LogoutAction } from "../actions/AuthActions"


const Logout = props => {
    const dispatch = useDispatch()
    dispatch(LogoutAction)

    const history = useHistory()
    history.goBack()
    console.log(history)

    return (
        <Redirect to="/" />
    )
}

export default Logout