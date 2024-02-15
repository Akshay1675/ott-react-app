import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO1 } from '../utils/constants'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user)

  useEffect(() => {
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid, email, displayName, photoURL} = user;
        
        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
        navigate("/browse")

      } else {
        
        dispatch(removeUser())
        navigate("/")
      }
    })
      return () => unsubscribe()
  }, []);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-16 mx-auto md:mx-0" src={LOGO1} alt="logo" />
      {user && (
        <div className="flex p-2 justify-between">
          
          <img
            className="hidden md:block w-12 h-12"
            alt=""
            src={user?.photoURL}
          />
          <button onClick={handleSignOut} className="font-bold text-white ">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  )
}

export default Header
