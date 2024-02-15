import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        mainMovieKey: null,
    },
    reducers: {
        addMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addMovieKey: (state,action) => {
            state.mainMovieKey = action.payload
        }
    }

})

export const { addMovies, addMovieKey } = movieSlice.actions

export default movieSlice.reducer