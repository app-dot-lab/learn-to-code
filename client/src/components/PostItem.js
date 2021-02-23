import React from "react";
import {Row,Col,Card} from 'react-bootstrap'
import {ExpandLess, ExpandMore} from '@material-ui/icons'

class PostItem extends React.Component {
    componentDidMount() {
        console.log(this)
    }

    postId = this.props.match.params.id;
    title = 'How to update App props when web component attributes are updated async?'
    desc = `Hi,

    I'm working on a REACT form, that's gonna be used as a web component in a Drupal site.
    
    The web component part went fine, but as shown in the example, I'm having issues updating properties in the App component, when attributes are updated after created on the web component.
    
    code example: https://stackblitz.com/edit/react-ts-nypnbz?file=index.tsx
    
    What am I missing to get the token value sent to <App /> when its updated by the setTimeout on the host page?
    
    `

    render() {
        return (
            <div className="main-container">
                <Col md={8} className='my-4 p-0'>
                    <Card className='card-dark cursor-pointer mb-4' onClick={{}}>
                        <Card.Body className='p-4'>

                            <div className='post mb-2'>
                                <p className='h2'>{this.title}</p>
                                <p className='h6 text-secondary text-hover-green'>u/iamashwincherian</p>
                                <p className='h5 text-secondary'>{this.desc}</p>
                                <span className='text-green'><ExpandLess></ExpandLess> 14</span><span className='text-secondary'><ExpandMore className='text-secondary'></ExpandMore> 0</span>
                            </div>

                            {/* <div className='comments mt-4'>
                                <div className='comment-item'>
                                    <p className='h5'>I think its true</p>
                                    <p className='h6 text-secondary text-hover-green'>u/iamashwincherian</p>
                                    <p className='h5 text-secondary'>asdas</p>
                                    <span className='text-green'><ExpandLess></ExpandLess> 14</span><span className='text-secondary'><ExpandMore className='text-secondary'></ExpandMore> 0</span>
                                </div>
                            </div> */}
                        </Card.Body>
                    </Card>

                    <div className='mt-4'>
                        <hr></hr>
                        <Card className='card-dark cursor-pointer' onClick={{}}>
                            <Card.Body className='p-4'>
                                <p className='h4'>asdasd</p>
                                <p className='h6 text-secondary text-hover-green'>u/iamashwincherian</p>
                                <p className='h5 text-secondary'></p>
                                <span className='text-green'><ExpandLess></ExpandLess> 14</span><span className='text-secondary'><ExpandMore className='text-secondary'></ExpandMore> 0</span>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </div>
        );
    }
}

export default PostItem;
