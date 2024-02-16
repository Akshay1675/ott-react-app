import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        mainMovieKey: null,
        popularMovies: null,
        upcomingMovies: null,
        tvSeries: null,
        muteStatus: false
    },
    reducers: {
        addMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload
        },
        addTvSeries: (state, action) => {
            state.tvSeries = action.payload
        },
        addMovieKey: (state,action) => {
            state.mainMovieKey = action.payload
        },
        toggleMute: (state) => {
            state.muteStatus = !state.muteStatus
        }
    }

})

export const { addMovies, addMovieKey, addPopularMovies, addUpcomingMovies, addTvSeries, toggleMute } = movieSlice.actions

export default movieSlice.reducer