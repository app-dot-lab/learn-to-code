import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import MDEditor from '@uiw/react-md-editor';

import Backend from '../../api/backend';

const EditPost = props => {
    const postId = props.match.params.id
    const [post, setPost] = useState({})
    const [title, setTitle] = useState("");
    const [body, setBody] = useState('');

    const onSubmit = e => {
        e.preventDefault()
        console.log('editing', postId)
    }

    useEffect(() => {
        Backend.get(`/posts/${postId}`)
            .then((res) => {
                setPost(res.data)
                setTitle(res.data.title)
                setBody(res.data.body)
            })
            .catch((err) => console.log(err));
    }, [])
    
    return (
        <div className="main-container">
            <h1>Edit Post</h1>
            <br></br>
            <Form onSubmit={e => onSubmit(e)}>
                <Form.Group>
                    <Form.Label>Post Title</Form.Label>
                    <Form.Control value={title} onInput={e => setTitle(e.target.value)} placeholder="Enter Title" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Body</Form.Label>
                    <div>
                        <MDEditor height={500} value={body} onChange={setBody} />
                    </div>
                </Form.Group>
                <Form.Group>
                    <Button type="submit">Post</Button>
                </Form.Group>
            </Form>
            <br></br>
            <MDEditor.Markdown source={body} />
        </div>
    )
}

export default EditPost