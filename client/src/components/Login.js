import React from "react";
import Auth from "../auth/Auth";
import { Row, Col, Button, Form, Card } from "react-bootstrap";
import { Redirect } from "react-router";

import Backend from "../api/backend";

class Login extends React.Component {
    state = { username: "", password: "" };

    setUsername = (value) => this.setState({ username: value });
    setPassword = (value) => this.setState({ password: value });

    login = () => {
        Backend.post("/login", {
            username: this.state.username,
            password: this.state.password,
        })
            .then((res) => {
                this.props.setToken(res.data.token);
            })
            .catch((err) => {
                console.log("err", err);
            });
    };

    render() {
        // if(){
        //     return <Redirect to={{ pathname: this.props.history.location.state.from.pathname }} />
        // }
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
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        this.login();
                                    }}
                                >
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
                                                this.setUsername(e.target.value)
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
                                                this.setPassword(e.target.value)
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
}

export default Login;
