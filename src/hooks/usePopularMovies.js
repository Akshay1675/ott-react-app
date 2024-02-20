import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addMovies, addPopularMovies } from "../utils/movieSlice"
import { useEffect } from "react"

const usePopularMovies = () => {
    const dispatch = useDispatch()
    const movies = useSelector((store) => store.movie.popularMovies)

  const getMoviesData = async () => {
    const data = await fetch('https://content-jiovoot.voot.com/psapi/voot/v1/voot-web/content/specific/editorial-max?query=include%3A3ddc57cab24bb0b33efe8bad07bc509e&aspectRatio=3x4&responseType=common&page=1')

    const json = await data.json()
    dispatch(addPopularMovies(json.result))
  }

  useEffect(() => {
   !movies && getMoviesData()
  }, [])
}

export default usePopularMovies;