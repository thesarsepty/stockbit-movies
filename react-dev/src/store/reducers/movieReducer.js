import { SET_MOVIES, SET_MOVIE_DETAILS, SET_CURRENT_MOVIE } from '../constant/actionTypes'

const initialState = {
  movies: [],
  current_movie: {
    title: '',
    page: 0,
    isNext: false
  },
  movie_detail: {}
}

function moviesReducer (state = initialState, action){
  
  switch (action.type) {
    
    case SET_MOVIES:
      return {...state, movies: action.payload}
    
    case SET_CURRENT_MOVIE:
      return {...state, current_movie: action.payload}  

    case SET_MOVIE_DETAILS:
      return {...state, movie_detail: action.payload}   
  
    default:
      return state
  }
}

export default moviesReducer