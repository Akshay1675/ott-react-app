import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addMovieKey } from "../utils/movieSlice"

const useMainVideo = (id) => {
    const dispatch = useDispatch()
    const movieKey = useSelector((store) => store.movie.mainMovieKey)
    const video = async () => {
     const videoData = await fetch("https://api.themoviedb.org/3/movie/"+ id +"/videos?language=en-US", API_OPTIONS)
     const json = await videoData.json()
      console.log(json)
     const key = json?.results[22].key
     dispatch(addMovieKey(key))
    }
    useEffect(() => {
     !movieKey && video()
    }, [])
}

export default useMainVideo