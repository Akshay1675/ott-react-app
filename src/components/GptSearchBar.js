import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/languageConfig'
import openai from "../utils/openai"
import { addMovieData } from '../utils/gptSlice'

const GptSearchBar = () => {
    const language = useSelector((store) => store.config.lang)
    const searchText = useRef()
    const dispatch = useDispatch()

    const getMovieResult = async (movieName) => {
      const movieData = await fetch('https://www.omdbapi.com/?s='+ movieName +'&apikey=58e99d47')

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
      const movieName = data?.choices[0]?.message?.content?.split(",").map(name => name.trim())


      const promiseArray = movieName.map((movie) => getMovieResult(movie))

      const movieResult = await Promise.all(promiseArray)

      dispatch(addMovieData({movieName, movieResult}))
      
    } 
  return ( 
    <div className='pt-[35%] md:pt-[10%] flex justify-center bg-gradient-to-b from-[#100413]'>
      <form className='w-[90%] md:w-1/2  grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
        <input ref={searchText} className='p-4 m-4 col-span-9 border border-gray-500 rounded-md ' type='text' placeholder={lang[language].searchPlaceholder}/>
        <button className='bg-[#5f1870] text-white w-20   px-3 py-2 m-4 rounded-lg col-span-3' onClick={handleGptSearch}>{lang[language].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
