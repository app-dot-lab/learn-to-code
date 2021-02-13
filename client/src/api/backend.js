import axios from 'axios'

const Backend = axios.create({
    baseURL: 'http://localhost:5000'
})

export default Backend