import React, { useEffect, useState } from "react";
import { Card, Row, Col, Form } from "react-bootstrap";
import { ExpandLess, ExpandMore, Add, Search } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Backend from "../../api/backend";

import './styles.css'

const Home = () => {
    const auth = useSelector(state => state.auth)
    const [posts, setPosts] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        Backend.get("/posts").then((res) => {
            setPosts(res.data);
            setSearchResults(res.data)
        });
    }, [])

    const onSearch = value => {
        setSearchTerm(value)
        if(value == '') {
            return setSearchResults(posts)
        }
        setSearchResults(posts.filter(post => {
            if(post.title.toLowerCase().includes(value.toLowerCase()) 
            || post.body.toLowerCase().includes(value.toLowerCase())) {
                return post
            }
        }))
    }

    return (
        <div className="main-container">
            <Row>
                <Col>
                    <h1>Posts</h1>
                </Col>
                { auth.isLoggedIn && 
                    <Col className="text-right my-auto">
                        <Link
                            className="btn btn-sm btn-color-outline-primary"
                            to={{
                                pathname: "/posts/new",
                                state: {
                                    applied: true,
                                },
                            }}>
                            <Add className="mr-2" />
                            <span className="my-auto">Create New</span>
                        </Link>
                    </Col>
                }
            </Row>
            <Form>
                <Form.Group id="post-search" className="mb-0"> 
                    <Search className="search-icon"></Search>
                    <Form.Control
                        className="input-dark shadow-none pl-5 mb-1"
                        type="text"
                        placeholder="Search for a post"
                        value={searchTerm}
                        onInput={e => onSearch(e.target.value)}
                        required
                    />
                </Form.Group>
            </Form>
            <br></br>
            <Row className="posts">
                { searchResults.map((post, index) => {
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
                                                u/{post.author?.username}
                                            </p>
                                            <Card.Title className="h4">
                                                {post.title}
                                            </Card.Title>
                                            <p className="text-secondary">{post.body.slice(0,150)} ... <small className="text-secondary text-hover-primary">(Read More)</small></p>
                                            <span className="text-color-primary">
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
    )
}

export default Home;
