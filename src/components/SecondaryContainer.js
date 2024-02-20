import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movie)
  return (
    movies.nowPlayingMovies && (
    <div className='bg-[#0e050f]'>
      <div className='mt-0 md:-mt-36 pl-4 md:pl-12 relative z-20'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"The 100 Crore Club"} movies={movies.popularMovies}/>
        <MovieList title={"English Blockbusters In Hindi"} movies={movies.upcomingMovies}/>
        <MovieList title={"India's Top-Rated Originals 🌟"} movies={movies.tvSeries}/>
      </div>
    </div>
    )
  )
}

export default SecondaryContainer
