import { Row, Col, Modal, Card, Button } from 'react-bootstrap'
import { useState } from "react";
import ReactMarkdown from 'react-markdown'
import { useSelector } from 'react-redux';

import MainContainer from '../../components/containers/MainContainer'
import IDE from '../../components/ide/IDE'
import CodeBlock from '../../components/posts/CodeBlock';
import getCourse from './SampleCourse';

import "ace-builds/src-noconflict/ext-language_tools"
import "ace-builds/src-noconflict/mode-javascript";
import 'ace-builds/src-noconflict/theme-kuroir'; // Light Theme
import "../posts/styles.scss";

const Lesson = props => {
    const course = getCourse(0)
    const [code, setCode] = useState(course.defaultSnippet)
    const [output, setOutput] = useState('')
    const [error, setError] = useState('')
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleOpen = () => setShow(true)

    const onCompile = res => {
        if(res != course.expectedOutput) {
            setOutput('')
            setError(res)
            return
        }

        setOutput(res)
        setError('')
        handleOpen()
    }

    return (
        <MainContainer style={{overflowY: 'hidden'}}>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Lesson Completed!</Modal.Title>
                </Modal.Header>
                <Modal.Body>You have successfully completed the lesson</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        Next
                    </Button>
                </Modal.Footer>
            </Modal>

            <Row>
                <Col xs={6} style={{overflowY: 'auto', height: '100vh'}}>
                    <ReactMarkdown components={CodeBlock()}>{course.content}</ReactMarkdown>
                </Col>
                <Col xs={6} style={{height: '100vh'}}>
                    <IDE code={code} setCode={setCode} onCompile={onCompile} />
                    <div className="mt-3" style={{height: '40vh'}}>
                        <Card className="h-75">
                            <Card.Body>
                                Output
                                <p className="mt-2"><code className="text-success">{output}</code></p>
                                <p className="mt-2"><code className="text-secondary">{error.toString().split('\n').map(line => <p className="pb-0 mb-0 text-danger">{line}</p>)}</code></p>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
        </MainContainer>
    )
}

export default Lesson