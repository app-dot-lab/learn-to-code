import React from 'react'
import Backend from '../api/backend'
import Sidebar from './Sidebar'
import Posts from './Posts'
import Home from './Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends React.Component {

    state = { message: '' }
    
    async componentDidMount() {
        const response = (await Backend.get('/'))['data']
        const message = response.message
        this.setState({message:message})
    }

    render() {
        return (
            <Router>
                <div>
                    <Sidebar />

                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Posts path='/posts' component={Posts} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App