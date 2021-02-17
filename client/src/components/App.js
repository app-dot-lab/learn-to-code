import React from 'react'
import Backend from '../api/backend'
import Sidebar from './Sidebar'
import Posts from './Posts'
import Home from './Home'
import {Row, Col, Form} from 'react-bootstrap'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends React.Component {

    state = {isSearchActive: false}

    // toggling search state
    searchListener = (isSearchActive) => {
        this.setState({isSearchActive})

        if(isSearchActive){
            document.addEventListener("keydown", this.handleSearchEscape);
        } else {
            document.removeEventListener("keydown", this.handleSearchEscape);
        }
    }

    handleSearchEscape = (e) => {
        if(e.key == 'Escape') {
            var isSearchActive = this.state.isSearchActive
            isSearchActive = !isSearchActive
            this.setState({isSearchActive})
        }
    }

    render() {
        return (
            <Router>
                <div>
                    <Sidebar searchListener={ this.searchListener } isSearchActive={this.state.isSearchActive} />

                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/search' exact component={Search} />
                        <Route path='/posts' exact component={Posts} />
                    </Switch>

                    { this.state.isSearchActive && <Search /> }
                </div>
            </Router>
        )
    }
}

class Search extends React.Component {

    componentDidMount() {
        console.log(this)
    }

    render(){
        return (
            <div className='search'>
                <Row>
                    <Col>
                        {/* <h1>Search</h1> */}
                        <Form className='text-center'>
                            <Form.Group className='mx-auto' style={{width: '80%'}}>
                                <input type='text' placeholder='Search anything' ref={(input) => { this.searchInput = input; }} />
                                <p className='text-right mt-2'>Press 'Esc' to close</p>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default App