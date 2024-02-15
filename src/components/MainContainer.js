import React from 'react'
import MainVideoTitle from './MainVideoTitle'
import MainVideoBg from './MainVideoBg'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movie = useSelector((store) => store.movie?.nowPlayingMovies)

    if(!movie) return 

    const mainMovie = movie[1]
  return (
    <div>
        <MainVideoTitle title={mainMovie.original_title} overview={mainMovie.overview}/>
        <MainVideoBg id={mainMovie.id}/>
      
    </div>
  )
}

export default MainContainer
