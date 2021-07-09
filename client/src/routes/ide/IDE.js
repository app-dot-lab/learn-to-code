import { Row, Col, Button, Card, Alert } from "react-bootstrap"
import { useEffect, useState } from "react";
import AceEditor from "react-ace"
import { CheckCircle } from '@material-ui/icons/';

import Backend from "../../api/backend";

import "ace-builds/src-noconflict/mode-javascript";

// Dark
import 'ace-builds/src-noconflict/theme-gruvbox';
import 'ace-builds/src-noconflict/theme-merbivore_soft';
import 'ace-builds/src-noconflict/theme-gob';
import 'ace-builds/src-noconflict/theme-kuroir'; // Light Theme

const defaultSnippet = `function main() {
    const value = "Hello! World";
    console.log(value);
}

main()`

const IDE = () => {
    const [code, setCode] = useState(defaultSnippet)
    const [output, setOutput] = useState('')
    const [outputStatus, setOutputStatus] = useState('no output')

    const compile = async () => {
        var response;
        try {
            response = await Backend.post('/ide/javascript', {code})
            setOutput(response.data)
            setOutputStatus('success')
        } catch (error) {
            setOutput('')
            setOutputStatus('failed')
        }
    }
    
    const ResponseCheckMark = () => {
        switch(outputStatus) {
            case 'success':
                return (
                    <Col className="text-right">
                        <CheckCircle style={{opacity: 0.7, color: '#84d6a9'}} className="mr-2" />
                    </Col>
                )
            case 'failed':
                return (
                    <Col className="text-right">
                        <CheckCircle style={{opacity: 0.7, color: '#d68484'}} className="mr-2" />
                    </Col>
                )
            default:
                return (<div></div>)
        }
    }

    return (
        <div className="main-container">
            <Row>
                <Col>
                    <h1>IDE</h1>
                </Col>
                <Col className="text-right">
                        <Button variant="success" onClick={() => compile()}>Run</Button>
                </Col>
            </Row>
            <Row>
                <Col xs={8}>
                    <Card className='card-dark mt-3'>
                        <Card.Body>
                            <AceEditor 
                                mode="javascript"
                                theme="merbivore_soft"
                                name="ide"
                                editorProps={{ $blockScrolling: true }}
                                width="100%"
                                height="80vh"
                                value={code}
                                fontSize={16}
                                enableSnippets={true}
                                onChange={(value) => setCode(value)}
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4}>
                    <Card className='card-dark mt-3'>
                        <Card.Body>
                            <Row className="mb-3">
                                <Col>
                                    <h5>Output</h5>
                                </Col>
                                <Col className="text-right">
                                    <ResponseCheckMark />
                                </Col>
                                
                            </Row>
                            <p className="text-secondary">{output ? output : 'No output'}</p>
                            {/* {
                                output ? (outputStatus === ''
                                ? <Alert key="ide-output-err" variant="danger">
                                    Something went wrong!
                                  </Alert>
                                : <Alert className="p-2 px-3" key="ide-output-err" variant="success">
                                    <CheckCircle style={{opacity: 0.7}} className="mr-2"></CheckCircle>Compiled Successfully
                                  </Alert>
                                ) : ''
                            } */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default IDE