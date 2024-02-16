import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addMovies, addPopularMovies } from "../utils/movieSlice"
import { useEffect } from "react"

const usePopularMovies = () => {
    const dispatch = useDispatch()
    const movies = useSelector((store) => store.movie.popularMovies)

  const getMoviesData = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?&page=1', API_OPTIONS)

    const json = await data.json()
    dispatch(addPopularMovies(json.results))
  }

  useEffect(() => {
   !movies && getMoviesData()
  }, [])
}

export default usePopularMovies;