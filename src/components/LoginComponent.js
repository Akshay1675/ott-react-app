import React, { useState } from 'react'

const LoginComponent = () => {
    const[isSignIn, setIsSignIn] = useState(true)

    const handleIsSignIn = () => {
        setIsSignIn(!isSignIn)
    }
  return (
    <section class="rounded-lg p-2">
    <div class="flex items-center justify-center rounded-lg bg-[rgba(0,0,0,0.8)] px-6 py-10 sm:px-6 sm:py-16 lg:px-8 w-[350px]">
      <div class="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
        
        <h2 class="text-2xl font-bold leading-tight text-white">
          {isSignIn ? "Sign In" : "Sign UP"}
        </h2>
       
        <form action="#" method="POST" class="mt-8">
          <div class="space-y-5">
            {!isSignIn &&<div>
                
                <label for="" class="text-base font-medium text-gray-300">
                  
                  Name
                </label>
                <div class="mt-2">
                  <input
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
                  class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-white"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <button
                type="button"
                class="inline-flex w-full items-center justify-center rounded-md bg-orange-700 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-orange-700/80"
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
