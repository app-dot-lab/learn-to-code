import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ProtectedRoute } from "../protectedRoutes";
import Courses from "./Courses";
import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";
import PostItem from "./PostItem";
import NewPost from "./posts/NewPost";
import Search from "./Search";
import IDE from "./ide/IDE";

const App = () => {
    const [searchActive, setSearchActive] = useState(false)
    const auth = useSelector(state => state.auth)

    const searchListener = isActive => {
        setSearchActive(isActive)
        if (isActive) {
            document.addEventListener("keydown", handleSearchEscape);
        } else {
            document.removeEventListener("keydown", handleSearchEscape);
        }
    };

    const handleSearchEscape = (e) => {
        if (e.key === "Escape") {
            setSearchActive(false)
        }
    };

    return (
        <Router>
            <Sidebar searchListener={searchListener} />

            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/search" exact component={Search} />
                <ProtectedRoute
                    isAuthenticated={auth.isLoggedIn}
                    path="/courses"
                    exact
                    component={Courses}
                />
                <ProtectedRoute isAuthenticated={auth.isLoggedIn} path="/posts/new" exact component={NewPost} />
                <Route path="/posts/:id" exact component={PostItem} />
                <Route path="/ide" exact component={IDE} />
                <Route path="/login" exact component={Login}/>
                <Route path="/logout" exact component={Logout}/>
            </Switch>

            {searchActive && <Search />}

        </Router>
    );
}

export default App;
