import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMute } from '../utils/movieSlice'
import { Volume, VolumeX } from 'lucide-react'

const MainVideoTitle = ({title, overview}) => {
  const dispatch = useDispatch()
  const muteStatus = useSelector((store) => store.movie.muteStatus)
  const handleMute = () => {

    dispatch(toggleMute())
  }
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
      <p className=' hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
      <div>
        <button className='bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80'> Play</button>
        <button className='hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'>Info</button>
        <button
      type="button"
      className="ml-4 mt-2 rounded-full bg-transparent px-4 py-4 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" onClick={handleMute}
    >
     {muteStatus ? <Volume /> : <VolumeX />}
    </button>

      </div>
    </div>
  )
}

export default MainVideoTitle
