import React from 'react'
import './index.scss'

const AnimateLettter = ({ letterClass, strArray, idx }) => {
  return (
    <>
      <span>
        {strArray.map((char, i) => (
    
            <span  key={char + i} className={`${letterClass} _${i + idx} new text-6xl ssm:text-[2rem] sm:text-3xl`}>
              {char}
            </span>
          
          ))}
          <br style={{margin:'0'}}></br>
      </span>
    </>
  )
}

export default AnimateLettter
