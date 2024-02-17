import React from 'react'
import MainVideoTitle from './MainVideoTitle'
import MainVideoBg from './MainVideoBg'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movie = useSelector((store) => store.movie?.upcomingMovies)

    if(!movie) return 

    const mainMovie = movie[0]
  return (
    <div className='pt-[30%] bg-black md:pt-0'>
        <MainVideoTitle title={mainMovie.original_title} overview={mainMovie.overview}/>
        <MainVideoBg id={mainMovie.id}/>
      
    </div>
  )
}

export default MainContainer
