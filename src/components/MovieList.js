import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {

  return (
    <div className='px-6'>
        <h1 className='text-lg md:text-2xl py-6 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll no-scrollbar'>
         <div className='flex '>
           {movies?.map((movie) => <MovieCard key={movie.imdbID} img={movie.seo?.ogImage ? movie.seo?.ogImage : movie.Poster}/>)}
         </div>
        </div>
    </div>
  )
}

export default MovieList
