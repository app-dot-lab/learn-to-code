import axios from 'axios'
import { useSelector } from 'react-redux'

// Find a way to implement redux

const getToken = () => {
    try {
        return JSON.parse(localStorage.getItem('authUser')).token
    } catch {
        return ''
    }
}

const Backend = axios.create({
    baseURL: 'http://localhost:5000/',
    headers: {
        Authorization: "Bearer " + getToken()
    }
})

export default Backend