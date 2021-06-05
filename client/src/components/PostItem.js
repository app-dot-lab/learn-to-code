import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

import Backend from "../api/backend";

class PostItem extends React.Component {
    state = { post: { author: {} } };

    componentDidMount() {
        const postId = this.props.match.params.id;
        Backend.get(`/posts/${postId}`)
            .then((res) => {
                this.setState({ post: res.data });
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div className="main-container">
                <Col md={8} className="my-4 p-0">
                    <Card className="card-dark cursor-pointer mb-4">
                        <Card.Body className="p-4">
                            <div className="post mb-2">
                                <p className="h2">{this.state.post.title}</p>
                                <p className="h6 text-secondary text-hover-green">
                                    u/{this.state.post.author.username}
                                </p>
                                <p className="h5 text-secondary">
                                    {this.state.post.body}
                                </p>
                                <span className="text-green">
                                    <ExpandLess></ExpandLess> 14
                                </span>
                                <span className="text-secondary">
                                    <ExpandMore className="text-secondary"></ExpandMore>{" "}
                                    0
                                </span>
                            </div>

                            {/* <div className='comments mt-4'>
                                <div className='comment-item'>
                                    <p className='h5'>I think its true</p>
                                    <p className='h6 text-secondary text-hover-green'>u/iamashwincherian</p>
                                    <p className='h5 text-secondary'>asdas</p>
                                    <span className='text-green'><ExpandLess></ExpandLess> 14</span><span className='text-secondary'><ExpandMore className='text-secondary'></ExpandMore> 0</span>
                                </div>
                            </div> */}
                        </Card.Body>
                    </Card>

                    {/* Comments */}

                    <div className="mt-4">
                        <hr></hr>
                        <Card className="card-dark cursor-pointer">
                            <Card.Body className="p-4">
                                <p className="h4">Great Work!</p>
                                <p className="h6 text-secondary text-hover-green">
                                    u/anonymous
                                </p>
                                <p className="h5 text-secondary"></p>
                                <span className="text-green">
                                    <ExpandLess></ExpandLess> 14
                                </span>
                                <span className="text-secondary">
                                    <ExpandMore className="text-secondary"></ExpandMore>{" "}
                                    0
                                </span>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </div>
        );
    }
}

export default PostItem;
