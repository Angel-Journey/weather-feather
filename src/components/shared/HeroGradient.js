import React from 'react'

const HeroGradient = () => {
  const heroStyles = {
    // make sure to use '' around color
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'radial-gradient(circle, rgba(203,201,0,1) 0%, rgba(114,9,121,1) 35%, rgba(0,212,255,1) 100%)',
    height: '30vh',
    color: 'white'
  }

  return (
    <div style={heroStyles}>
      <h1>The Coolest Birds In Town</h1>
    </div>
  )
}

export default HeroGradient
