import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addTvSeries } from "../utils/movieSlice"
import { useEffect } from "react"

const useTvSeries = () => {
    const dispatch = useDispatch()
    const series = useSelector((store) => store.movie.tvSeries)

  const getMoviesData = async () => {
    const data = await fetch('https://api.themoviedb.org/3/tv/top_rated?&page=1', API_OPTIONS)

    const json = await data.json()
    dispatch(addTvSeries(json.results))
  }

  useEffect(() => {
   !series && getMoviesData()
  }, [])
}

export default useTvSeries;