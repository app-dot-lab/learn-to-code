import { Row, Col, Card } from 'react-bootstrap'
import { useState } from "react";
import ReactMarkdown from 'react-markdown'
import { useSelector } from 'react-redux';

import MainContainer from '../../components/containers/MainContainer'
import IDE from '../../components/ide/IDE'
import CodeBlock from '../../components/posts/CodeBlock';

import "ace-builds/src-noconflict/ext-language_tools"
import "ace-builds/src-noconflict/mode-javascript";
import 'ace-builds/src-noconflict/theme-kuroir'; // Light Theme
import "../posts/styles.scss";

const Lesson = props => {
    const defaultSnippet = `function main() {
    const value = "Hello! World";
    console.log(value);
}
    
main()`

const content = `
A UI element that is not currently supported out of the box with Flutter is a click wheel, or knob, or radial control, rotatable circle, or whatever you want to call it. The following snippet demonstrates how to take a circular container, then detect which direction the user is rotating (clockwise or counter clockwise) and its velocity. 
Full [wheel demo source code](https://github.com/fireship-io/216-flutter-ipod/blob/master/lib/wheel.dart). 

#### 👉 Detect Pan Gestures

Use a [GestureDetector](https://api.flutter.dev/flutter/widgets/GestureDetector-class.html) to wrap a container with a BoxShape.circle. Every pan event on the circle will emit data with information about the user's movement. 

#### 💫 Calculate Rotational Movement

Think of a wheel as four separate quadrants like topRight, bottomRight, bottomLeft, and topLeft. For each quadrant, then are four different directions the user can move: up, down, left, or right. We can calculate the change in the user's movement by looking at the *delta*, then adjust it based on the quadrant in which it occurred. 

#### 🏄 Add Velocity

Adding velocity will make this UI element feel more natural if it controls a scrollable view. The faster the user pans, the higher the velocity. Simply multiply the rotational change by the delta distance. 

---
##### Constraints
\`\`\`javascript
    console.log('hi');
    var i = 0;
\`\`\`
---
A UI element that is not currently supported out of the box with Flutter is a click wheel, or knob, or radial control, rotatable circle, or whatever you want to call it. The following snippet demonstrates how to take a circular container, then detect which direction the user is rotating (clockwise or counter clockwise) and its velocity. 
Full [wheel demo source code](https://github.com/fireship-io/216-flutter-ipod/blob/master/lib/wheel.dart). 

#### 👉 Detect Pan Gestures

Use a [GestureDetector](https://api.flutter.dev/flutter/widgets/GestureDetector-class.html) to wrap a container with a BoxShape.circle. Every pan event on the circle will emit data with information about the user's movement. 

#### 💫 Calculate Rotational Movement

Think of a wheel as four separate quadrants like topRight, bottomRight, bottomLeft, and topLeft. For each quadrant, then are four different directions the user can move: up, down, left, or right. We can calculate the change in the user's movement by looking at the *delta*, then adjust it based on the quadrant in which it occurred. 

#### 🏄 Add Velocity

Adding velocity will make this UI element feel more natural if it controls a scrollable view. The faster the user pans, the higher the velocity. Simply multiply the rotational change by the delta distance. 

---
##### Constraints
\`\`\`javascript
    console.log('hi');
    var i = 0;
\`\`\`
---
`
    
    const [code, setCode] = useState(defaultSnippet)

    return (
        <MainContainer style={{overflowY: 'hidden'}}>
            <Row>
                <Col xs={6} style={{overflowY: 'scroll', height: '100vh'}}>
                    <h3>Lesson 1</h3>
                    <ReactMarkdown components={CodeBlock()}>{content}</ReactMarkdown>
                </Col>
                <Col xs={6} style={{height: '100vh'}}>
                    <IDE code={code} setCode={setCode} />
                    <div className="mt-3" style={{height: '30vh'}}>
                        <Card className="h-75">
                            <Card.Body>
                                Output
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
        </MainContainer>
    )
}

export default Lesson