import React from 'react'
import Header from "./Header"
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTvSeries from '../hooks/useTvSeries'
import GptSearch from "./GptSearch"
import { useSelector } from 'react-redux'

const Browse = () => {

useNowPlayingMovies()
usePopularMovies()
useTvSeries()

const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  
  return (
    <>
    <Header />
    { showGptSearch ? <GptSearch /> : 
    <div>
      <MainContainer />
      <SecondaryContainer />
    </div>} 
    </>
  )
}

export default Browse
