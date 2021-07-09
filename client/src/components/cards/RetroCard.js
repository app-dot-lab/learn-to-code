import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const RetroCard = (props) => {
    return (
        <Card className='card-retro cursor-pointer mb-2'>
            <Card.Body>
                <div className="card-retro-content">
                    { props.img && <Card.Img variant='top' src={props.img} /> }
                    <div className="p-3">
                        {props.children}
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default RetroCard