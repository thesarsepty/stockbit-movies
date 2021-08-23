import { SET_MOVIES, SET_MOVIE_DETAILS, SET_CURRENT_MOVIE } from '../constant/actionTypes'
import setLoading from './loadingAction'
import setError from './errorAction'
import axios from 'axios'

const access_key = process.env.REACT_APP_ACCESSKEY

export function fetchMovies(keyword, page){
  return (dispatch, getState) => {

    const prevMovies = getState().movieReducer
    
    dispatch(setLoading(true))
    axios({
      url: `http://www.omdbapi.com?apikey=${access_key}&s=${keyword}&page=${page}`,
      method: 'GET'
    })
    .then((movies) => {
      
      if (movies.data.Response === "True"){
        dispatch(setError(''))
        dispatch({
          type: SET_MOVIES,
          payload: prevMovies.current_movie.title !== keyword ? movies.data.Search : [...prevMovies.movies, ...movies.data.Search]
        })
        
        const next = movies.data.Search.length > 0 ? true : false
        dispatch({
          type: SET_CURRENT_MOVIE,
          payload: {
            title: keyword,
            page: page,
            isNext: next
          }
        })
      } else {
        dispatch(setError(movies.data.Error))
      }
      
    })
    .catch((err) => {
      console.log(err, 'err')
    })
    .finally((_) => {
      dispatch(setLoading(false))
    })
  }

}

export function getDetailMovie(id) {
  return(dispatch, getState) => {
    dispatch(setLoading(true))
    axios({
      url: `http://www.omdbapi.com?apikey=${access_key}&i=${id}`,
      method: 'GET'
    })
    .then((movie) => {
      
      dispatch({
        type: SET_MOVIE_DETAILS,
        payload: movie.data
      }) 
    })
    .catch((err) => {
      console.log(err, 'err')
    })
    .finally((_) => {
      dispatch(setLoading(false))
    })
  }
}
