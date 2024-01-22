import React from "react";
import Navbar from "./Navbar";
import Registration from '../images/Registration.png'
import {Link} from 'react-router-dom'
function EmailSend() {
    
  return (
    <>
    <Navbar />
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      {/* login container */}
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-4 ">
        {/* form */}
        <div className="md:block hidden w-1/2">
          <img src={Registration} 
          className="rounded-2xl"/>
        </div>

        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-orange-800">Check Email</h2>
          <p className="text-xs mt-4 text-neutral-500">Please check your email inbox and click on the provided link to reset your password. If you didn't receive email.<Link to="/" className="text-blue-500">Click here to resend</Link></p>
          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <Link to="/LoginPage" className="hover:underline">Back to Sign In</Link>
          </div>
        </div>
        
      </div>
    </section>
    </>
  );
}

export default EmailSend;
