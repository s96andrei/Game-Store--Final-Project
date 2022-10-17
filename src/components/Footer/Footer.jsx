import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        Copyright &copy; Electronics Store
                    </Col>
                </Row>


            </Container>
        </div>

    )
}

export default Footer