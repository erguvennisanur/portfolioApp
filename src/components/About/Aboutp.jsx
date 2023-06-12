
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutp() {
  return (
    <div className='aboutpagebackground'>
    <Container>
        <Row className='textbackground'>
            <Col md={7} >
                <h3 className='aboutmetext'>About <span>Me</span></h3>
                <p className='aboutdetails'>
                I am a senior software engineering student living in Turkey and studying at Atılım University. I like to be a developer in the field of software engineering and I am improving myself about UI&UX design.
               
                <br>I am an innovative person who likes to develop myself, and who is prone to teamwork.Besides, I live in a planned way and give importance to time management.</br>
                
                <br>I care about the rapid implementation of projects by working quickly and efficiently as a team member.</br>

                </p>
                <ul className='skilllist'>
                    <Row>
                        <h3>Skills</h3>
                        <Col md={5}>
                            <li>HTML5/CSS3</li>
                            <li>JavaScript</li>
                            <li>Bootsrap 5</li>
                        </Col>
                        <Col md={5}>
                            <li>ReactJs</li> 
                            <li>React-Bootsrap</li>                  
                            <li>Git/Github/Bitbucket/Jira</li>
                        </Col>
                        <Col md={5}>
                            <li>.NetCore/ C#</li>    
                            <li>MsSql</li>
                            <li>Figma/Canva</li>
                        </Col>
                    </Row>
                </ul>
            </Col>
            <Col md={5}>
                <div className="webimage"></div>
            </Col>
        </Row>
    </Container>
</div>
  )
}

export default Aboutp


