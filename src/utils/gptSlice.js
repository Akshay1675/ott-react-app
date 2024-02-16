import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        movieName: null,
        movieResult: null,
    },
    reducers: {
        toggleGptSearch: (state) => {
            state.showGptSearch = !state.showGptSearch
        },
        addMovieData: (state, action) => {
            const {movieName, movieResult} = action.payload
            state.movieName = movieName
            state.movieResult = movieResult
        }
    }
})

export const { toggleGptSearch, addMovieData } = gptSlice.actions

export default gptSlice.reducer