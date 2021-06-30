import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { DARK_MODE, LIGHT_MODE } from "../actions/types";
import Sidebar from "./Sidebar";
import { ProtectedRoute } from "../protectedRoutes";
import Courses from "../routes/Courses";
import Home from "../routes/Home";
import Posts from "../routes/Posts/Posts";
import Login from "./Login";
import Logout from "./Logout";
import PostItem from "../routes/Posts/PostItem";
import NewPost from "../routes/Posts/NewPost";
import EditPost from "../routes/Posts/EditPost";
import Search from "./Search";
import IDE from "./ide/IDE";
import Settings from "./settings/Settings";

const App = () => {
    const [searchActive, setSearchActive] = useState(false)
    const storeStates = useSelector(state => state)
    const auth = storeStates.auth

    // Change this logic

    const theme = storeStates.theme
    if (theme.mode == DARK_MODE) {
        document.getElementsByTagName('body')[0].classList.add('dark')
    }
    else if (theme.mode == LIGHT_MODE) {
        document.getElementsByTagName('body')[0].classList.remove('dark')
    }

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
                <Route path="/posts" exact component={Posts} />
                <Route path="/search" exact component={Search} />
                <ProtectedRoute
                    isAuthenticated={auth.isLoggedIn}
                    path="/courses"
                    exact
                    component={Courses}
                />
                <ProtectedRoute isAuthenticated={auth.isLoggedIn} path="/posts/new" exact component={NewPost} />
                <ProtectedRoute isAuthenticated={auth.isLoggedIn} path="/ide" exact component={IDE} />
                <Route path="/posts/:id" exact component={PostItem} />
                <Route path="/posts/:id/edit" exact component={EditPost} />
                <Route path="/login" exact component={Login}/>
                <Route path="/logout" exact component={Logout}/>
                <Route path="/settings" exact component={Settings}/>
            </Switch>

            {searchActive && <Search />}

        </Router>
    );
}

export default App;
