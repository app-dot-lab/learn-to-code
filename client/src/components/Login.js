import React, { useState } from "react";
import Auth from "../auth/Auth";
import { Row, Col, Button, Form, Card } from "react-bootstrap";
import { Redirect } from "react-router";

import Backend from "../api/backend";
import { useDispatch } from "react-redux";
import { Login as LoginAction, Logout } from '../actions/AuthActions'

const Login = (props) => {
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = async (e) => {
        e.preventDefault()
        try {
            const response = await Backend.post("/login", {
                username: username,
                password: password,
            })
            dispatch(LoginAction(response.data.user))

            props.location.state.from 
                ? props.history.push(props.location.state.from)
                : props.history.push('/')

            return <Redirect to="/" />
        } catch(err) {
            console.error(err)
        }
    };

    return (
        <div className="main-container text-center">
            <h2>
                Login to
                <strong>
                    <span className="text-green">CODE</span>
                </strong>
            </h2>

            <Row>
                <Col xl={4} lg={8} md={10} xs={12} className="mx-auto">
                    <Card className="card-dark card-login text-left">
                        <Card.Body className="p-4">
                            <Form
                                className="login-form"
                                onSubmit={(e) => login(e)}>
                                <Form.Group>
                                    <Form.Label className="text-secondary">
                                        Username/Email
                                    </Form.Label>
                                    <Form.Control
                                        className="input-dark shadow-none"
                                        type="text"
                                        placeholder="Enter Username / Email"
                                        required
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="text-secondary">
                                        Password
                                    </Form.Label>
                                    <Form.Control
                                        className="input-dark shadow-none mb-2"
                                        type="password"
                                        placeholder="Enter Password"
                                        required
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                    <a href="#" className="text-green">
                                        Forgot Password?
                                    </a>
                                </Form.Group>
                                <Button
                                    type="submit"
                                    className="w-100 border-none bg-green text-black mt-1 py-3 fw-5"
                                >
                                    Login
                                </Button>
                                <p className="text-muted text-center m-4">
                                    Or login with
                                </p>
                                <Row>
                                    <Col xs={6}>
                                        <div className="text-center social-auth-button">
                                            <a
                                                href="#"
                                                className="text-white border-primary"
                                            >
                                                <img
                                                    className=""
                                                    src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"
                                                ></img>
                                                <p className="d-inline ml-2 mt-1 fw-5 my-auto text-dark">
                                                    Google
                                                </p>
                                            </a>
                                        </div>
                                    </Col>
                                    <Col xs={6}>
                                        <div className="text-center social-auth-button social-fb">
                                            <a
                                                href="#"
                                                className="text-white border-primary"
                                            >
                                                <img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png"></img>
                                                <p
                                                    className="d-inline ml-2 mt-1 fw-5 my-auto"
                                                    style={{
                                                        color: "#1877f2",
                                                    }}
                                                >
                                                    Facebook
                                                </p>
                                            </a>
                                        </div>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Login;
