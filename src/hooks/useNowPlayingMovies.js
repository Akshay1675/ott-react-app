import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addMovies } from "../utils/movieSlice"
import { useEffect } from "react"

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    const movie = useSelector((store) => store.movie.nowPlayingMovies)

  const getMoviesData = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPTIONS)

    const json = await data.json()
    dispatch(addMovies(json.results))
  }

  useEffect(() => {
   !movie && getMoviesData()
  }, [])
}

export default useNowPlayingMovies;