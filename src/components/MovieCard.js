import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({img}) => {
  return (
   img && (<div className='w-36 md:w-56 pr-4'>
      <img alt='new movie' src={IMG_CDN_URL + img}/>
    </div>)
  )
}

export default MovieCard
