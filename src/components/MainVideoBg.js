import React from 'react'
import { useSelector } from 'react-redux'

const MainVideoBg = () => {


   let mute = "mute=1"
   const muteStatus = useSelector(store => store.movie.muteStatus)
   muteStatus ? mute = "mute=0" : mute = "mute=1"
  return (
   
    
    <div className='w-screen'>
      
      <iframe className='w-screen aspect-video ' src={"https://www.youtube.com/embed/9KEoZanqlOE?si=GEyO1UYqIjOBs2Hh?si=7FVvHEjEmPd2FU7p?&autoplay=1&" + mute} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
  )
}

export default MainVideoBg
