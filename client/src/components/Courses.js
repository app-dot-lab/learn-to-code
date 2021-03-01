import React from 'react'
import {Row, Col, Card} from 'react-bootstrap'

class Courses extends React.Component {

    courses = [
        { 
            title: 'Custom Usernames in firebase',
            desc: 'How to implement and validate custom usernames for Firebase users with Cloud Firestore',
            img: 'https://fireship.io/lessons/custom-usernames-firebase/img/featured.webp',
            tags: ['firebase'],
            color: '#fab22c',
        },
        { 
            title: 'Seven Awesome PWA Features',
            desc: 'Seven awesome web-platform features you didn\'t know about',
            img: 'https://fireship.io/lessons/pwa-top-features/img/featured.webp',
            tags: ['PWA'],
            color: '#7d20d5',
        },
        { 
            title: 'Multi-Level Dropdown Menu with React',
            desc: 'Build an animated multi-level dropdown menu from scratch with React, inspired by Facebook\'s 2020 UI update', 
            img: 'https://fireship.io/lessons/dropdown-menu-multi-level-react/img/featured.webp',
            tags: ['react'],
            color: '#446cf0',
        },
        { 
            title: 'Autosave Vue Forms with Firestore',
            desc: 'Build a form that preloads and autosaves data to Firestore in realtime',
            img: 'https://fireship.io/lessons/vue-autosaving-forms-with-firestore/img/featured.webp',
            tags: ['vue'],
            color: '#4ce58d',
        },
        { 
            title: 'Multi-Level Dropdown Menu with React',
            desc: 'Build an animated multi-level dropdown menu from scratch with React, inspired by Facebook\'s 2020 UI update', 
            img: 'https://fireship.io/lessons/dropdown-menu-multi-level-react/img/featured.webp',
            tags: ['react'],
            color: '#446cf0',
        },
        { 
            title: 'Custom Usernames in firebase',
            desc: 'How to implement and validate custom usernames for Firebase users with Cloud Firestore',
            img: 'https://fireship.io/lessons/custom-usernames-firebase/img/featured.webp',
            tags: ['firebase'],
            color: '#fab22c',
        },
        { 
            title: 'Autosave Vue Forms with Firestore',
            desc: 'Build a form that preloads and autosaves data to Firestore in realtime',
            img: 'https://fireship.io/lessons/vue-autosaving-forms-with-firestore/img/featured.webp',
            tags: ['vue'],
            color: '#4ce58d',
        },
        { 
            title: 'Multi-Level Dropdown Menu with React',
            desc: 'Build an animated multi-level dropdown menu from scratch with React, inspired by Facebook\'s 2020 UI update', 
            img: 'https://fireship.io/lessons/dropdown-menu-multi-level-react/img/featured.webp',
            tags: ['react'],
            color: '#446cf0',
        },
    ]

    render() {
        return (
            <div className='main-container'>
                <h1>Courses</h1>
                <br></br>
                <Row className='courses'>
                    {
                        this.courses.map((course, index) => {
                            return (
                                <Col key={index} sm={12} md={6} lg={4} xl={3}>
                                    <Card className='card-dark cursor-pointer mb-5'>
                                        <Card.Img variant='top' src={course.img}/>
                                        <Card.Body>
                                            <h3><strong>{course.title}</strong></h3>
                                            <p className='text-secondary h5'>{course.desc}</p>
                                            <div className='tags mt-4'>
                                                {
                                                    course.tags.map((tag, index2) => {
                                                        return <span key={index2} className='tag' style={{border: `1px solid ${course.color}`, color: `${course.color}`}}>{tag}</span>
                                                    })
                                                }
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        )
    }
}

export default Courses