import React, { useEffect, useState } from "react";
import { Col, Button } from "react-bootstrap";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import ReactMarkdown from 'react-markdown'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Backend from "../../api/backend";
import CodeBlock from '../../components/posts/CodeBlock'

import './styles.scss'

const PostItem = props => {
    const [post, setPost] = useState({})
    const postId = props.match.params.id

    useEffect(() => {
        Backend.get(`/posts/${postId}`)
            .then((res) => {
                console.log(res.data)
                setPost(res.data)
            })
            .catch((err) => console.log(err));
    }, [])

    return (
        <div className="main-container">
            <Col md={7} className="my-4 p-0 mx-auto">
                <div className="post" style={{marginLeft: '-100px'}}>
                    <div>
                        <h1 className="h1 d-inline">{post.title}</h1>
                        <Link className="d-inline my-auto py-auto ml-4" to={`/posts/${post._id}/edit/`}><Button size="sm" variant="success">Edit</Button></Link>
                    </div>
                    <p className="h6 text-secondary text-hover-green">
                        u/{post.author?.username}
                    </p>
                    <hr></hr>
                    <br></br>
                    <ReactMarkdown components={CodeBlock()}>
                        {post.body}
                    </ReactMarkdown>
                    <span className="text-green">
                        <ExpandLess></ExpandLess> 14
                    </span>
                    <span className="text-secondary">
                        <ExpandMore className="text-secondary"></ExpandMore>{" 0"}
                    </span>
                </div>
            </Col>
        </div>
    );
}

export default PostItem;
