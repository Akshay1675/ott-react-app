import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/languageConfig'
import openai from "../utils/openai"
import { API_OPTIONS } from '../utils/constants'
import { addMovieData } from '../utils/gptSlice'

const GptSearchBar = () => {
    const language = useSelector((store) => store.config.lang)
    const searchText = useRef()
    const dispatch = useDispatch()

    const getMovieResult = async (movieName) => {
      const movieData = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movieName +'&include_adult=false&language=en-US&page=1', API_OPTIONS)

      const json = await movieData.json()
      return json
    }

    const handleGptSearch = async () => {

      const gptQuery =
      "Act as a movie reccomendation system and suggest some good movies for the query" +
      searchText.current.value +
      ".Only give me 5 movies suggestion that are seprated by a comma as shown in the example. Example Results: Sholay, Don, Apne, Hunter, KGF ";

     const data = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });
      const movieName = data?.choices[0]?.message?.content?.split(",")


      const promiseArray = movieName.map((movie) => getMovieResult(movie))

      const movieResult = await Promise.all(promiseArray)

      dispatch(addMovieData({movieName, movieResult}))
      
    } 
  return ( 
    <div className='pt-[35%] md:pt-[10%] flex justify-center bg-gradient-to-b from-[#100413]'>
      <form className='w-[90%] md:w-1/2  grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
        <input ref={searchText} className='p-4 m-4 col-span-9 border border-gray-500 rounded-md ' type='text' placeholder={lang[language].searchPlaceholder}/>
        <button className='bg-[#5f1870] text-white  px-3 py-2 m-4 rounded-lg col-span-3' onClick={handleGptSearch}>{lang[language].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
