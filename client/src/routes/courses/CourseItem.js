import ReactMarkdown from 'react-markdown'
import { Row, Col, Card } from 'react-bootstrap'
import { Link } from "react-router-dom";

import RetroCard from '../../components/cards/RetroCard'

const content = `
A UI element that is not currently supported out of the box with Flutter is a click wheel, or knob, or radial control, rotatable circle, or whatever you want to call it. The following snippet demonstrates how to take a circular container, then detect which direction the user is rotating (clockwise or counter clockwise) and its velocity. 

Full [wheel demo source code](https://github.com/fireship-io/216-flutter-ipod/blob/master/lib/wheel.dart). 

&nbsp;

### 👉 Detect Pan Gestures

Use a [GestureDetector](https://api.flutter.dev/flutter/widgets/GestureDetector-class.html) to wrap a container with a BoxShape.circle. Every pan event on the circle will emit data with information about the user's movement. 

&nbsp;

### 💫 Calculate Rotational Movement

Think of a wheel as four separate quadrants like topRight, bottomRight, bottomLeft, and topLeft. For each quadrant, then are four different directions the user can move: up, down, left, or right. We can calculate the change in the user's movement by looking at the *delta*, then adjust it based on the quadrant in which it occurred. 

The final value is rotationalChange. If the value is positive, the wheel is rotating clockwise, if negative it is moving counterclockwise. Use this value to change something meaningful in the UI. 

&nbsp;

### 🏄 Add Velocity

Adding velocity will make this UI element feel more natural if it controls a scrollable view. The faster the user pans, the higher the velocity. Simply multiply the rotational change by the delta distance. 
`

const lessons = [
    {
        name: '01 Introduction',
        desc: 'Learn the fundementals of Javascript'
    },
    {
        name: '02 Varaibles',
        desc: 'Learn how to declare and use variables'
    },
    {
        name: '03 Case sensitivity',
        desc: 'Understanding the case sensitivity in variables'
    },
    {
        name: '03 Arthmetic Operations',
        desc: 'Add 2 numbers with JS'
    },
    {
        name: '01 Introduction',
        desc: 'Learn the fundementals of Javascript'
    },
    {
        name: '02 Varaibles',
        desc: 'Learn how to declare and use variables'
    },
    {
        name: '03 Case sensitivity',
        desc: 'Understanding the case sensitivity in variables'
    },
    {
        name: '03 Arthmetic Operations',
        desc: 'Add 2 numbers with JS'
    },
]

const CourseItem = props => {
    return (
        <div className="main-container">
            <h1>{props.match.params.name}</h1>
            <br></br>
            <Card style={{width: 'fit-content'}}>
                <Card.Body>
                    <img src="https://fireship.io/lessons/vue-autosaving-forms-with-firestore/img/featured.webp" />
                </Card.Body>
            </Card>
            <hr></hr>
            <ReactMarkdown>{content}</ReactMarkdown>
            <hr></hr>
            <br></br>
            <h3>Lessons</h3>
            <br></br>
            <h5>👶 Javascript Basics</h5>
            <br></br>
            <Row>
                {lessons.map(lesson => {
                    return (
                        <Col sm={6}>
                            <Link to={`/courses/${props.match.params.name}/lessons/${lesson.name}`}>
                                <RetroCard>
                                    <strong>{lesson.name}</strong>
                                    <p>{lesson.desc}</p>
                                </RetroCard>
                            </Link>
                        </Col>
                    )
                })}
            </Row>
            <br></br>
            <h5>👷 Advanced Javascript</h5>
            <br></br>
            <Row>
                {lessons.map(lesson => {
                    return (
                        <Col sm={6} key={lesson.name}>
                            <Link to={`/courses/${props.match.params.name}/lessons/${lesson.name}`}>
                                <RetroCard>
                                    <strong>{lesson.name}</strong>
                                    <p>{lesson.desc}</p>
                                </RetroCard>
                            </Link>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default CourseItem