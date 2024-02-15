import React, { useRef, useState } from 'react'
import { validateData } from '../utils/formValidation'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'

const LoginComponent = () => {
  const dispatch = useDispatch()
    const[isSignIn, setIsSignIn] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    const email = useRef()
    const password = useRef()
    const Name = useRef()

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
     displayName: Name.current.value, photoURL: "https://media.licdn.com/dms/image/C5603AQHoaXmjS7ZWsA/profile-displayphoto-shrink_100_100/0/1662983243074?e=1713398400&v=beta&t=Bhav3chgw1PvwQn83mclclAyua4q_V_XtuuxRDN6gE0"
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
    <section class="rounded-lg p-2">
    <div class="flex items-center justify-center rounded-lg bg-[rgba(0,0,0,0.8)] px-6 py-10 sm:px-6 sm:py-16 lg:px-8 w-[400px]">
      <div class="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
        
        <h2 class="text-2xl font-bold leading-tight text-white">
          {isSignIn ? "Sign In" : "Sign UP"}
        </h2>
       
        <form onSubmit={(e) => e.preventDefault} class="mt-8">
          <div class="space-y-5">
            {!isSignIn &&<div>
                
                <label for="" class="text-base font-medium text-gray-300">
                  
                  Name
                </label>
                <div class="mt-2">
                  <input
                    ref={Name}
                    class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-white"
                    type="text"
                    placeholder="FUll Name"
                  />
                </div>
            </div>}
            <div>
                
              <label for="" class="text-base font-medium text-gray-300">
                
                Email address 
              </label>
              <div class="mt-2">
                <input
                  ref={email}
                  class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-white"
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div>
              <div class="flex items-center justify-between">
                <label for="" class="text-base font-medium text-gray-300">
                  
                  Password
                </label>
               
              </div>
              <div class="mt-2">
                <input
                  ref={password}
                  class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-white"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <h1 className='text-red-600 font-bold text-lg py-2'>{errorMessage}</h1>
            <div>
              <button
                type="button"
                class="inline-flex w-full items-center justify-center rounded-md bg-orange-700 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-orange-700/80"
                onClick={handleButtonClick}
              >
                {isSignIn ? "Sign In " : "Sign Up"}
                
              </button>
            </div>
            </div>
            </form>
             <p class=" text-sm text-gray-400 m-1">
          { isSignIn ? "Dont have an account? " : "Already have an account "}
          <button onClick={handleIsSignIn}>{isSignIn ? " Create new account" : "Login"}</button>
        </p>
          </div>
      </div>
  </section>
  
  )
}

export default LoginComponent
