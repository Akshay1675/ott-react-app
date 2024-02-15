import React from 'react'
import Header from "./Header"
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryComponent from './SecondaryComponent'

const Browse = () => {

useNowPlayingMovies()
  
  return (
    <>
    <Header />
    <div>
      <MainContainer />
      <SecondaryComponent />
    </div>
    </>
  )
}

export default Browse
