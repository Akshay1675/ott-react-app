import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addMovieKey } from "../utils/movieSlice"

const useMainVideo = (id) => {
    const dispatch = useDispatch()
    const video = async () => {
     const videoData = await fetch("https://api.themoviedb.org/3/movie/"+ id +"/videos?language=en-US", API_OPTIONS)
     const json = await videoData.json()
    //  console.log(json)
     const key = json?.results[0].key
     dispatch(addMovieKey(key))
    }
    useEffect(() => {
      video()
    }, [])
}

export default useMainVideo