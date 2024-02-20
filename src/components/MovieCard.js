import React from 'react'

const MovieCard = ({img}) => {
  return (
   img && (<div className='w-36 md:w-56 pr-4'>
      <img alt='new movie' src={img}/>
    </div>)
  )
}

export default MovieCard
