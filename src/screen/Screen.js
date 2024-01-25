import React from 'react'
import '../asset/css/screen/screen.css'
import Navbar from '../navigation/Navbar'

const Screen = (props) => {
  return (
    <>
      <div  className='navbar-section screen-component'>
        <Navbar />
      </div>
      <div className='main-section screen-component'>
        {props?.children}
      </div> 
    
    </>
  )
}

export default Screen