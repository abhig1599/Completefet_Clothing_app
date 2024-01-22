import React from 'react'
import Navbar2 from './Navbar2'
import Footer from './Footer'
import {Link} from 'react-router-dom'
import Completefit from '../images/complete fit.png'
import ProfileCard from './ProtfileCart'
const HomePage = () => {
    return (
        <div>
            <Navbar2 />
            <div className='h-1/2 flex w-fit'>
            <img src={Completefit}/>
            </div>
            <ProfileCard/>
            <Footer/>      
    </div>
  )
}

export default HomePage
