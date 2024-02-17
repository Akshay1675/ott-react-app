import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movie)
   console.log(movies)
  return (
    movies.nowPlayingMovies && (
    <div className='bg-[#0e050f]'>
      <div className='mt-0 md:-mt-36 pl-4 md:pl-12 relative z-20'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
        <MovieList title={"Tv Series"} movies={movies.tvSeries}/>
      </div>
    </div>
    )
  )
}

export default SecondaryContainer
