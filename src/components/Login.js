import React from 'react'
import { BACKGROUND_IMG } from '../utils/constants'
import LoginComponent from './LoginComponent'
import Header from './Header'

const Login = () => {
  return (
    
    <div>
      <Header />
    
    <img src={BACKGROUND_IMG} alt='bg-img' className='absolute'/>
    <div className='absolute mx-[440px] my-[90px]'>
    <LoginComponent />
    </div>
    </div>
  )
}

export default Login
