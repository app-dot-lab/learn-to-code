import { Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { DarkMode, LightMode } from "../../actions/ThemeActions"

const Settings = () => {
    const dispatch = useDispatch()

    const darkMode = () => {
        dispatch(DarkMode)
    }

    const lightMode = () => {
        dispatch(LightMode)
    }

    return (
        <div className="main-container">
            <h1>Settings</h1>

            <p>Theme :</p>
            <Button variant="dark" className="mr-2" onClick={darkMode}>Dark</Button>
            <Button variant="light" onClick={lightMode}>Light</Button>
        </div>
    )
}

export default Settings