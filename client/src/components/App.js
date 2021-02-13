import React from 'react'
import Backend from '../api/backend'
import Sidebar from './Sidebar'
import Posts from './Posts'

class App extends React.Component {

    state = { message: '' }
    
    async componentDidMount() {
        const response = (await Backend.get('/'))['data']
        const message = response.message
        this.setState({message:message})
    }

    render() {
        return (
            <div>
                <Sidebar />

                <Posts />
            </div>
        )
    }
}

export default App