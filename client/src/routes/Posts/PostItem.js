import React, { useEffect, useState } from "react";
import { Col, Button } from "react-bootstrap";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import MDEditor from '@uiw/react-md-editor';
import ReactMarkdown from 'react-markdown'
import { Link } from "react-router-dom";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope, a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useSelector } from "react-redux";

import Backend from "../../api/backend";
import { LIGHT_MODE } from '../../actions/types'

import './styles.scss'

const PostItem = props => {
    const theme = useSelector(state => state.theme)
    const [post, setPost] = useState({})
    const postId = props.match.params.id

    useEffect(() => {
        Backend.get(`/posts/${postId}`)
            .then((res) => {
                setPost(res.data)
            })
            .catch((err) => console.log(err));
    }, [])

    const CodeBlock = {
        code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            console.log('language',props)
            return !inline && match ? (
              <SyntaxHighlighter style={ theme.mode == LIGHT_MODE ? a11yLight : anOldHope} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
            ) : (
              <code className={className} {...props} style={{fontFamily: 'monospace'}}>
                {children}
              </code>
            )
        }
    }
      

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
                    <ReactMarkdown 
                        components={CodeBlock} 
                        >
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
