import React from 'react'
import "../../pages/style.css"
import {Container , Row , Col } from "react-bootstrap"
import Text from "../Home/Text"
import {AiFillGithub , AiOutlineTwitter , AiFillInstagram} from "react-icons/ai"
import {FaLinkedinIn} from "react-icons/fa"

function Homep() {
  return (
    <div className='homebg'>
       <Container>
          <Row>
             <Col md={7}>
                <h2 className='headtext'>Hello <span className='wave'>🎈</span></h2>
                <h2 className='nametext'>I'm Nisanur Ergüven</h2>
                <span></span>
                <Text/>
                    <button onClick={() => {
                      window.open("https://www.linkedin.com/in/nisanur-erg%C3%BCven/");
                    }}
                      className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
                    
                    <button onClick={() => {
                      window.open("https://github.com/erguvennisanur");
                    }}
                      className='socailmediabtn'><AiFillGithub className='icon' /></button>
                    
                    <button onClick={() => {
                      window.open("https://www.instagram.com/pinkydeveloper/?igshid=OGQ5ZDc2ODk2ZA%3D%3D");
                    }}
                      className='socailmediabtn'><AiFillInstagram className='icon' /></button>
                        
                    <button onClick={() => {
                      window.open("https://twitter.com/pinkydeveloper");
                    }}
                      className='socailmediabtn'><AiOutlineTwitter className='icon' /></button>
             </Col>

             <Col md={5}>
                 <div className='imagedeveloper'></div>
             </Col>
          </Row>
       </Container>
    </div>
  )
}

export default Homep