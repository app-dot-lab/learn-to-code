import React from "react";
import Sidebar from "./Sidebar";
import { Row, Col, Form } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ProtectedRoute } from "../protectedRoutes";
import Courses from "./Courses";
import Home from "./Home";
import Login from "./Login";
import PostItem from "./PostItem";
import NewPost from "./NewPost";

class App extends React.Component {
    // gets auth token
    getToken = () => {
        return sessionStorage.getItem("token");
    };

    state = {
        isSearchActive: false,
        authToken: this.getToken(),
        isAuthenticated: false,
    };

    // sets auth token
    setToken = (token) => {
        this.setState({ authToken: token, isAuthenticated: true });
        sessionStorage.setItem("token", token);
    };

    isAuthenticated = () => {
        if (this.state.authToken) {
            this.setState({ isAuthenticated: true });
            return true;
        } else {
            this.setState({ isAuthenticated: false });
            return false;
        }
    };

    componentDidMount() {
        this.isAuthenticated();
    }

    // toggling search state
    searchListener = (isSearchActive) => {
        this.setState({ isSearchActive });

        if (isSearchActive) {
            document.addEventListener("keydown", this.handleSearchEscape);
        } else {
            document.removeEventListener("keydown", this.handleSearchEscape);
        }
    };

    handleSearchEscape = (e) => {
        if (e.key == "Escape") {
            var isSearchActive = this.state.isSearchActive;
            isSearchActive = !isSearchActive;
            this.setState({ isSearchActive });
        }
    };

    render() {
        return (
            <Router>
                <Sidebar
                    searchListener={this.searchListener}
                    isSearchActive={this.state.isSearchActive}
                />

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/search" exact component={Search} />
                    <ProtectedRoute
                        isAuthenticated={this.state.isAuthenticated}
                        path="/courses"
                        exact
                        component={Courses}
                    />
                    <ProtectedRoute isAuthenticated={this.state.isAuthenticated} path="/posts/new" exact component={NewPost} />
                    <Route path="/posts/:id" exact component={PostItem} />
                    <Route
                        path="/login"
                        exact
                        render={(props) => (
                            <Login setToken={this.setToken} {...props} />
                        )}
                    />
                </Switch>

                {this.state.isSearchActive && <Search />}
            </Router>
        );
    }
}

class Search extends React.Component {
    render() {
        return (
            <div className="search">
                <Row>
                    <Col>
                        <Form className="text-center">
                            <Form.Group
                                className="mx-auto"
                                style={{ width: "80%" }}
                            >
                                <input
                                    type="text"
                                    placeholder="Search anything"
                                    ref={(input) => {
                                        this.searchInput = input;
                                    }}
                                />
                                <p className="text-right mt-2">
                                    Press 'Esc' to close
                                </p>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
