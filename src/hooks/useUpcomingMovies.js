import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import {  addUpcomingMovies } from "../utils/movieSlice"
import { useEffect } from "react"

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    const movie = useSelector((store) => store.movie.upcomingMovies)

  const getMoviesData = async () => {
    const data = await fetch('https://content-jiovoot.voot.com/psapi/voot/v1/voot-web/content/specific/editorial-max?query=include%3A5690e3c2dfb408dc240929bf6cae4231&aspectRatio=3x4&responseType=common&page=1')

    const json = await data.json()
    dispatch(addUpcomingMovies(json.result))
  }

  useEffect(() => {
   !movie && getMoviesData()
  }, [])
}

export default useNowPlayingMovies;