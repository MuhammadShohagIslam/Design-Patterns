import React from 'react'

export default function Fahrenheit({input = 0}) {
  return (
    <div className='temp'>
      {(input * 9) / 5 + 32 }°F
    </div>
  )
}

