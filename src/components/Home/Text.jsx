import React from 'react'
import '../../pages/style.css';
import Typewriter from "typewriter-effect"

function Text() {
  return (
    <div>
      <Typewriter
      options={{
        strings:[
          "Junior Software Engineer"
        ],
        autoStart : true,
        loop: true,
        deleteSpeed: 50,
      }} 

      />
    </div>
  )
}

export default Text
