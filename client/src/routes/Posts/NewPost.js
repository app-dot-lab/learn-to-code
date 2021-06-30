import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import MDEditor from '@uiw/react-md-editor';

import Backend from '../../api/backend';

const NewPost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState('');

    const createNewPost = e => {
        e.preventDefault()
        const datas = {title,body}
        Backend.post('/posts', datas)
            .then(res => {
                console.log('Successfully created')
            })
            .catch(err => {
                console.error('error', err)
            })
    }

    return (
        <div className="main-container">
            <h1>New Post</h1>
            <br></br>
            <Form onSubmit={e => createNewPost(e)}>
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

export default NewPost