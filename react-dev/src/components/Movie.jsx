import LoaderSpinner from './LoaderSpinner'
import { useDispatch, useSelector } from 'react-redux'
import Content from './Content'
import { useState, useRef, useCallback } from 'react'
import ModelImg from './ModelImg'
import { fetchMovies } from '../store/actions/movieAction'


function Movie(props) {

  let observer = useRef()
  const loading = useSelector(state => state.loadingReducer.loading)
  const current_movie = useSelector(state => state.movieReducer.current_movie)
  const dispatch = useDispatch()
    
  const [modal, setModal] = useState({
    showModal: false,
    img: ''
  })
 
  const lastElementRef = useCallback(node => {
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        if (!loading && current_movie.isNext) {
          dispatch(fetchMovies(current_movie.title, current_movie.page+1))
        }
      }
    })
    if (node) observer.current.observe(node)
    // eslint-disable-next-line
  }, [loading, current_movie.isNext])

  // if (loading){
  //   return <LoaderSpinner />
  // }

  return (
    <>
      <div 
      className="row"
      style={{height:'600px', overflow:'auto', position:'relative'}}
      >
        {
          props.dataMovie.map((movie, idx) => {
              if(props.dataMovie.length === idx+1){
                return(
                  <div
                  className="col-lg-4"
                  ref={lastElementRef}
                  key={idx+movie.Title}
                  > 
                   <Content 
                   movie={movie}
                   key={idx}
                   popUpImage={setModal}
                   />
                 </div>
                 )
              } else {
                return(
                  <div
                  className="col-lg-4"
                  key={idx+movie.Title}
                  > 
                   <Content 
                   movie={movie}
                   key={idx}
                   popUpImage={setModal}
                   />
                 </div>
                 )
              }
              
            
          })
        }  
        {
          loading && (<LoaderSpinner/>)
        }    
      </div>
        {
          modal.showModal ? <ModelImg handleCloseModal={setModal} image={modal.img}/> : ''
        }
      
    </>
    
  )
}

export default Movie
