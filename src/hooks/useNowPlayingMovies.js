import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addMovies } from "../utils/movieSlice"
import { useEffect } from "react"

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    const movie = useSelector((store) => store.movie.nowPlayingMovies)

  const getMoviesData = async () => {
    const data = await fetch('https://content-jiovoot.voot.com/psapi/voot/v1/voot-web/content/specific/editorial-max?query=include%3Ab5981d41d77eba03cd75df86565eac67&aspectRatio=3x4&responseType=common')

    const json = await data.json()
    dispatch(addMovies(json.result))
  }

  useEffect(() => {
   !movie && getMoviesData()
  }, [])
}

export default useNowPlayingMovies;