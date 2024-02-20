import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMoviesuggestion = () => {
 const result = useSelector((store) => store.gpt)
 
 const { movieName, movieResult} = result

  return (
    <div className='m-4 bg-[#100413] '>
      { movieName?.map((movie, index) => <MovieList title={movie} movies={movieResult[index].Search}/>)}
    </div>
  )
}

export default GptMoviesuggestion
