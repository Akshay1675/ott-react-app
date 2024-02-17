import React from 'react'
import Header from "./Header"
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
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
useUpcomingMovies()
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
