import React from 'react'
import WelcomePage from '../src/Components/WelcomePage'
import RegistrationPage from '../src/Components/RegistrationPage'
import LoginPage from './Components/LoginPage'
import ResetPow from './Components/ResetPow'
import EmailSend from './Components/EmailSend'
import Error from './Components/Error'
import HomePage from './Components/HomePage'
import {BrowserRouter , Route , Routes} from "react-router-dom"
const App = () => {
  return (
    
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<WelcomePage/>}></Route>
        <Route path='/HomePage' element={<HomePage/>}></Route>
        <Route path='/EmailSend' element={<EmailSend/>}></Route>
        <Route path='/Error' element={<Error/>}></Route>
        <Route path='/LoginPage' element={<LoginPage/>}></Route>
        <Route path='/RegistrationPage' element={<RegistrationPage/>}></Route>
        <Route path='/ResetPow' element={<ResetPow/>}></Route>
        
      </Routes>
      </BrowserRouter>

      
    </div>
  )
}

export default App
