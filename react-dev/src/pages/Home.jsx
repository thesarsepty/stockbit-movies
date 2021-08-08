import Movie from '../components/Movie'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMovies } from '../store/actions/movieAction'
import { useState } from 'react'
// import ModelImg from '../components/ModelImg'
function Home() {

  const dispatch = useDispatch()
  const movies = useSelector(state => state.movieReducer.movies)
  const error = useSelector(state => state.errorReducer.error)
  const [keyword, setKeyword] = useState('')
  
  function handleSearchClick(input){
    if(input){
      let modifiedInput = input.split(' ').join('+')
      dispatch(fetchMovies(modifiedInput, 1))
    }
  }
  // console.log(error, 'erearea')
  return (
    <div className="container py-5 text-center">
      <section className="d-flex py-5 sticky-top">
        
        <input 
        className="form-control me-2" 
        type="search" 
        placeholder="Search" 
        value={keyword}
        aria-label="Search" 
        onChange={(event) => setKeyword(event.target.value)}
        />
        
        <button 
        className="btn btn0" 
        type="button"
        onClick={() => handleSearchClick(keyword)}
        >Search
        </button>

      </section>
      
      { 
      error ?
      (<p>{error}</p>) 
      : 
      (
        <Movie 
        dataMovie={movies}
        />  
      )   
      }
   </div>
  )
}

export default Home
