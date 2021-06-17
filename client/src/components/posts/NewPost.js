import React, { useState } from "react";
import { Button, Row, Col, Card, Form } from "react-bootstrap";

import Backend from '../../api/backend'

const NewPost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const createNewPost = () => {
        const data = {title,body}
        console.log(data)
        Backend.post('/posts', data)
        .then(res => {
            console.log('Successfully created')
        })
        .catch(err => {
            console.error('error', err)
        })
    }

    return (
        <div className="main-container">
            <h1>Create New post</h1>
            <Row>
                <Col lg={6} xs={12}>
                    <Card className="card-dark">
                        <Card.Body>
                            <Form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    createNewPost();
                                }}
                            >
                                <Form.Group>
                                    <Form.Label className="text-secondary">
                                        Title
                                    </Form.Label>
                                    <Form.Control
                                        className="input-dark shadow-none"
                                        type="text"
                                        placeholder="Enter Title"
                                        required
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="text-secondary">
                                        Body
                                    </Form.Label>
                                    <Form.Control
                                        className="input-dark shadow-none px-4 py-3"
                                        as="textarea"
                                        type="text"
                                        placeholder="Enter Body"
                                        required
                                        onChange={(e) =>
                                            setBody(e.target.value)
                                        }
                                    />
                                </Form.Group>
                                <Button
                                    type="submit"
                                    className="w-100 border-none bg-green text-black mt-1 py-3 fw-5"
                                >
                                    Create
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default NewPost;
