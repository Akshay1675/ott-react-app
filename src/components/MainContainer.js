import React from 'react'
import MainVideoTitle from './MainVideoTitle'
import MainVideoBg from './MainVideoBg'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movie = useSelector((store) => store.movie?.nowPlayingMovies)

    if(!movie) return 

    const mainMovie = movie[0]
  return (
    <div className='pt-[30%] bg-black md:pt-0'>
        <MainVideoTitle title={mainMovie.shortTitle} overview={mainMovie.shortSynopsis}/>
        <MainVideoBg />
      
    </div>
  )
}

export default MainContainer
