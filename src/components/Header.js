import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { addUser, removeUser } from '../utils/userSlice'
import { LANG_SELECT, LOGO1 } from '../utils/constants'
import {  toggleGptSearch } from '../utils/gptSlice'
import { changeLang } from '../utils/configSlice'
import { LogOut, Search } from 'lucide-react'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user)

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)


  const handleGptSearch = () => {
    dispatch(toggleGptSearch())
  }
  const handleLangChange = (e) => {
    dispatch(changeLang(e.target.value))
  }

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
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-[#100413] z-10 flex flex-col md:flex-row justify-between">
      {/* <img className="w-16 mx-auto md:mx-0" src={LOGO1} alt="logo" /> */}
      <h1 className='font-extrabold text-3xl mt-2 text-purple-500'>AIFlix</h1>
      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch && (<select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLangChange}>
            {LANG_SELECT.map(lang => <option key={lang.identifiler} value={lang.identifiler}>{lang.name}</option>)}
            
          </select>)}
          <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg' onClick={handleGptSearch}>{showGptSearch ? "Homepage" : <Search />}</button>
          <img
            className="hidden md:block w-12 h-12"
            alt=""
            src={user?.photoURL}
          />
          <button onClick={handleSignOut} className="font-bold text-white ml-4">
          <LogOut />
          </button>
        </div>
      )}
    </div>
  )
}

export default Header
