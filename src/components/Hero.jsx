import React from 'react'

const Hero = ({searchQuery, handleSearch}) => {
  return (
    <>
      <div className='hero'>
        <div className='heading'>
          <h2 className='heading-text'>
            Unlock the Ultimate Guide to Achieving Your Goals and <span className='gradient-text'>Your Best Life!</span>
          </h2>
        </div>
        <div className='search'>
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>
    </>
  )
}

export default Hero;
