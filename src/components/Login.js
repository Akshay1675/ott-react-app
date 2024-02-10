import React from 'react'
import { LOGO1 } from '../utils/constants'
import { LOGO2 } from '../utils/constants'
import { BACKGROUND_IMG } from '../utils/constants'
import LoginComponent from './LoginComponent'

const Login = () => {
  return (
    <div>
    <div className='flex absolute z-50'>
      <img src={LOGO1} alt='logo' className='w-14 mx-6 my-4'/>
      <h1 className='font-extrabold text-3xl text-orange-700 ml-[-32px] mt-6'>FLIX</h1>
    </div>
    <img src={BACKGROUND_IMG} alt='bg-img' className='absolute'/>
    <div className='absolute mx-[504px] my-[90px]'>
    <LoginComponent />
    </div>
    </div>
  )
}

export default Login
