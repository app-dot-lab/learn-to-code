import { useState } from 'react'
import { Row, Col, Form} from "react-bootstrap"

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const onSearch = e => setSearchTerm(e.target.value)

    return (
        <div className="search">
            <Row>
                <Col>
                    <Form className="text-center">
                        <Form.Group className="mx-auto" style={{ width: "80%" }}>
                            <input
                                type="text"
                                placeholder="Search for anything"
                                value={searchTerm}
                                onInput={(event) => onSearch(event)}/>
                            <p className="text-right mt-2">Press 'Esc' to close</p>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Search