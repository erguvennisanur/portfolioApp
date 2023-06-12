import React from 'react'
import '../Aboutpage/Aboutpage.css'
import { Container, Row, Col } from 'react-bootstrap'

function Skill() {
  return (
    <Container>
    <div className="skilltitle">
      <Row>
        <h2 className='text-center'>My Skills</h2>
        <Col className='skillbox' md={7}>
        </Col>
        <Col md={5}></Col>
      </Row>
    </div>
  </Container>
  )
}

export default Skill
