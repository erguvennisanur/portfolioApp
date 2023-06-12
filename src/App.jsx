import { useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes , Route} from "react-router-dom"
import './App.css'

import Preloader from "../src/components/Pre"
import Home from "../src/pages/Home"
import About from "../src/pages/About"
import Resume from "../src/pages/Resume"
import Contact from "../src/pages/Contact"
import {motion} from "framer-motion"

function App() {
  const [load, updateLoad] = useState(true);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  console.log(mousePosition);

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  
  return (
    
       <div className="App">
          <motion.div
            className="cursor"
            variants={variants}
            animate="default"
          />
          <Router>
            <Preloader load={load} />
            <div className="App" id={load ? "no-scroll" : "scroll"}>
              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/resume' element={<Resume />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
              </Routes>
            </div>
          </Router>
    </div>
    
  )
}

export default App
