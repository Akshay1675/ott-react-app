import React, { useRef, useState } from 'react'
import { BACKGROUND_IMG, USER_AVATAR } from '../utils/constants'
import Header from './Header'
import { validateData } from '../utils/formValidation'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'

const Login = () => {

  const dispatch = useDispatch()
  const[isSignIn, setIsSignIn] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  const email = useRef()
  const password = useRef()
  const name = useRef()

  const handleButtonClick = () => {

  const message = validateData(email.current.value, password.current.value)
  setErrorMessage(message)

  if(message) return;

  if(!isSignIn) {
    //sign up logic

    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
  
  const user = userCredential.user;
   updateProfile(user, {
   displayName: name.current.value, photoURL: USER_AVATAR
   }).then(() => {
    // Profile updated!
    const {uid, email, displayName, photoURL} = auth.currentUser
    dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))


   }).catch((error) => {
    // An error occurred
   // ...
    });
  
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  setErrorMessage(errorCode + "-" + errorMessage)
});

  } else {
    // sign in logic
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
    })
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  setErrorMessage(errorCode + "-" + errorMessage)
});

  }


  }
  const handleIsSignIn = () => {
      setIsSignIn(!isSignIn)
  }

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img className="h-screen w-screen object-cover" src={BACKGROUND_IMG} alt="logo" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[90%] md:w-4/12 absolute p-10 bg-black my-36 md:my-16 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className='text-xs'>test email : test1@netflix.com</p>
        <p className='pb-2 text-xs'>test password : Test@12345</p>
        <p className="py-0 cursor-pointer" onClick={handleIsSignIn}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>

      </form>
    </div>
  )
}

export default Login
