import React from 'react'
import Navbar from './Navbar'
import Login from '../images/Login.png'
import {Link} from 'react-router-dom'

const ResetPow = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      {/* REsetPow container */}
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        {/* form */}
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-orange-800">Reset Your Password</h2>
          <p className="text-xs mt-4 text-neutral-500">Enter your email and we'll send you a like to reset your password.<br/>Please check it</p>

          <form action="" className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-xl border"
              type="email"
              name="email"
              placeholder="Email"
            />
            <button className="bg-orange-800 rounded-xl text-white py-2 hover:scale-105 duration-300">
              <Link to="/EmailSend">Send</Link>
            </button>
          </form>

          <div className="mt-5 text-xs border-b border-orange-800 py-4 text-orange-800">
            <Link to="/LoginPage">Go Back To Sign In</Link>
          </div>
        </div>

        {/* image */}
        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl" src={Login}
          />
        </div>
      </div>
    </section>
    </div>
  )
}

export default ResetPow
