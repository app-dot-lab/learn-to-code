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
                <Col md={8} className="my-4 p-0 mx-auto">
                    <div className="post" style={{marginLeft: '-100px'}}>
                        <p className="h2">{this.state.post.title}</p>
                        <p className="h6 text-secondary text-hover-green">
                            u/{this.state.post.author.username}
                        </p>
                        <br></br>
                        <p className="text-secondary">
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
                </Col>
            </div>
        );
    }
}

export default PostItem;
