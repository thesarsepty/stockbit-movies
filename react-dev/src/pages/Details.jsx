import { useEffect } from "react"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDetailMovie } from '../store/actions/movieAction'
import LoaderSpinner from '../components/LoaderSpinner'

function Details() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const movie_detail = useSelector(state => state.movieReducer.movie_detail)
  const loading = useSelector(state => state.loadingReducer.loading)
  
  useEffect(() => {
    dispatch(getDetailMovie(id))
    // eslint-disable-next-line
  }, [])
  
  if (loading || !movie_detail){
    return <LoaderSpinner className="mx-auto"/>
  }
  return (
    <div className="container-fluid" id="like-section">
    <div className="row" style={{background: "grey"}}>
      <div className="col-md-10 col-11 mx-auto">
        <div className="row mt-5 gx-3">
    
          <div className="col-md-12 col-lg-6 col-12 mx-auto main-like mb-lg-0 mb-5 shadow rounded-3">
            <div className="col-md-12 col-6 col-12 mx-auto main-like mb-lg-0 mb-5 shadow d-flex justify-content-center align-items-center">
              <img src={movie_detail.Poster} className="img rounded-3" alt=""/>
            </div>
          </div>
      
      <div className="col-md-12 col-lg-12 col-11 mx-auto mt-lg-0 mt-md-5 py-4">
        <div className="right-side p-3 shadow bg-white rounded-3">
          <div className="d-flex justify-content-between">
            <h3>{movie_detail.Title}</h3>
          </div>
          <div className="text-indiv d-flex row py-2">
            {movie_detail.Ratings ?
              movie_detail.Ratings.map((rating, idx) => {
                return <span key={idx}><i className="fas fa-star-half">{rating.Source} : {rating.Value}</i></span> 
              }) : (<p>no ratings</p>)
            } 

          </div>
          <div className="text-indiv d-flex">
            <p>Genre : {movie_detail.Genre}</p>            
          </div>
        </div>
      </div>
    </div>
  </div>
</div> 
</div>
  )
}

export default Details
