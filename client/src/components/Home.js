import React from 'react'
import {Card, Row, Col} from 'react-bootstrap'
import {ExpandLess, ExpandMore} from '@material-ui/icons'

class Home extends React.Component {

    posts = [
        { title: 'Keystone Flags: Feature Flagging With Less Mess' },
        { title: 'My almost dream office setup!' },
        { title: 'VS Code: Forgot History On Launch' },
        { title: 'Testing out some features from the Golang 1.16 Beta (Embedded files)' },
        { title: 'Some Code Refactor Tips for Junior Developers' },
        { title: 'Please help with code from hacked server' },
        { title: 'Coming to DevOps? Learn how to code' },
        { title: 'How can Stackoverflow make you a better developer' },
    ]

    render() {
        return (
            <div className='main-container'>
                <h1>Posts</h1>
                <br></br>
                <Row className='posts'>
                    {
                        this.posts.map((post, index) => {
                            return (
                                <Col md={12} md={6} className='mb-4'>
                                    <Card className='card-retro cursor-pointer'>
                                        <Card.Body>
                                            <div className='card-retro-content'>
                                                <p className='text-secondary'>u/iamashwincherian</p>
                                                <Card.Title className='h3'>{post.title}</Card.Title>
                                                <span className='text-green'><ExpandLess></ExpandLess> 14</span><span className='text-secondary'><ExpandMore className='text-secondary'></ExpandMore> 0</span>
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

export default Home