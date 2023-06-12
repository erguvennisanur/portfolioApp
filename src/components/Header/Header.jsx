import React , {useState} from 'react'
import { Button , Nav, Navbar } from 'react-bootstrap'
import {Link , NavLink} from "react-router-dom"
import '../../pages/style.css'

function Header() {
  const [expand , updateExpanded] = useState(false);
  const [navColour , updateNavbar] = useState(false)

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  
  return (
     <Navbar expanded = {expand} fixed='top' expand="md" className={navColour ? "sticky": "navbar"} >
        <Navbar.Brand className='logotext' as={Link} to="/">
           <div className='logo'></div> 
        </Navbar.Brand>
        
        <Navbar.Toggle className='navbar-toggler' aria-controls='responsive-navbar-nav'
            onClick={()=>{
              updateExpanded(expand ? false : "expanded");
            }}>
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id='responsive-navbar-nav' className='responsive-navbar'>
           <Nav className='ms-auto' defaultActiveKey="#home">
              <Nav.Item>
                <NavLink className="nav-link" to="/" onClick={()=> updateExpanded(false)}>Home</NavLink>
              </Nav.Item>

              <Nav.Item>
                <NavLink className="nav-link" to="/about" onClick={()=> updateExpanded(false)}>About</NavLink>
              </Nav.Item>

              <Nav.Item>
                <NavLink className="nav-link" to="/resume" onClick={()=> updateExpanded(false)}>Resume</NavLink>
              </Nav.Item>

              <Nav.Item>
                <NavLink className="nav-link" to="/contact" onClick={()=> updateExpanded(false)}>Contact</NavLink>
              </Nav.Item>

              <Button 
              onClick={()=>{
                window.open("https://www.canva.com/design/DAFdqd5zhr8/PisWgyh77qs9L4KwsYTMCQ/view?utm_content=DAFdqd5zhr8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink")
              }}
              className='resumebtn'
              >
              <span>See my CV</span>
              </Button>
           </Nav>
        </Navbar.Collapse>
     </Navbar>
  )
}

export default Header
