import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addTvSeries } from "../utils/movieSlice"
import { useEffect } from "react"

const useTvSeries = () => {
    const dispatch = useDispatch()
    const series = useSelector((store) => store.movie.tvSeries)

  const getMoviesData = async () => {
    const data = await fetch('https://content-jiovoot.voot.com/psapi/voot/v1/voot-web/content/specific/editorial-max?query=include%3Ace0941beecd9519074bad8a466435c95&aspectRatio=3x4&responseType=common&page=1')

    const json = await data.json()
    dispatch(addTvSeries(json.result))
  }

  useEffect(() => {
   !series && getMoviesData()
  }, [])
}

export default useTvSeries;