import React from 'react'
import Cover from '../images/coverpage.png'
import Navbar from '../Components/Navbar'
import {Link} from 'react-router-dom'

const WelcomePage = () => {

  return (
    <>
      <Navbar/>
        <div className='h-fit w-fit' >
        <img src={Cover} />
      </div>
    </>
  )
}

export default WelcomePage
