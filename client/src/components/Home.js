import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { ExpandLess, ExpandMore, Add } from "@material-ui/icons";
import { Link } from "react-router-dom";

import Backend from "../api/backend";

class Home extends React.Component {
    state = { posts: [] };

    componentDidMount() {
        Backend.get("/posts").then((res) => {
            var posts = res.data;
            if (posts.length > 0) this.setState({ posts });
        });
    }

    render() {
        return (
            <div className="main-container">
                <Row>
                    <Col>
                        <h1>Posts</h1>
                    </Col>
                    <Col className="text-right my-auto">
                        <Link
                            className="btn btn-sm btn-outline-success"
                            to={{
                                pathname: "/posts/new",
                                state: {
                                    applied: true,
                                },
                            }}
                        >
                            <Add className="mr-2" />
                            <span className="my-auto">Create New</span>
                        </Link>
                    </Col>
                </Row>
                <br></br>
                <Row className="posts">
                    {this.state.posts.map((post, index) => {
                        return (
                            <Col key={index} md={12} md={6} className="mb-4">
                                <Link
                                    to={{
                                        pathname: `/posts/${post._id}`,
                                        state: {
                                            applied: true,
                                        },
                                    }}
                                >
                                    <Card className="card-retro cursor-pointer">
                                        <Card.Body>
                                            <div className="card-retro-content">
                                                <p className="text-secondary">
                                                    u/{post.author.username}
                                                </p>
                                                <Card.Title className="h3">
                                                    {post.title}
                                                </Card.Title>
                                                <span className="text-green">
                                                    <ExpandLess></ExpandLess> 14
                                                </span>
                                                <span className="text-secondary">
                                                    <ExpandMore className="text-secondary"></ExpandMore>{" "}
                                                    0
                                                </span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        );
    }
}

export default Home;
