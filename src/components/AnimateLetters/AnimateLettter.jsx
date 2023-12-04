import React from 'react'
import './index.scss'

const AnimateLettter = ({ letterClass, strArray, idx }) => {
  return (
    <>
      <span>
        {strArray.map((char, i) => (
    
            <span key={char + i} className={`${letterClass} _${i + idx} new`}>
              {char}
            </span>
          
          ))}
      </span>
    </>
  )
}

export default AnimateLettter
