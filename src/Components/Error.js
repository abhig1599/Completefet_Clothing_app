import React from 'react'
import Navbar2 from './Navbar2'
import Icon from '../images/404.svg'
import Footer from './Footer'
import {Link} from 'react-router-dom'
const Error = () => {
    return (
        <div>
        <Navbar2/>
        <div id='404 Error Logo' className='flex items-center justify-center mt-20 mb-20 '>
           <div className='text-center'>
           <img src={Icon} className='ml-14'/>
            <h1 className='text-2xl'>OOps! Page Not Found</h1>
            <p>The page you are looking for might have been removed or temporarily unavailable.</p>
           </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Error
