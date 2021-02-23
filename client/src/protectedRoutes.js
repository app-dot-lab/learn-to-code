import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import Auth from "./auth/Auth";

export const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (isAuthenticated) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {
                                    from: props.location,
                                },
                            }}
                        />
                    );
                }
            }}
        />
    );
};
