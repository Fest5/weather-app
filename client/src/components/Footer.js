import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
           <Container>
               <Row>
                   <Col className='text-center py-3'>
                        Copyright Felipe Stuart &copy; Weather App. Powered by OpenWeather API
                   </Col>
               </Row>
            </Container> 
        </footer>
    )
}

export default Footer

