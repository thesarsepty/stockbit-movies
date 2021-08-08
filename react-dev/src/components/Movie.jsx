import LoaderSpinner from './LoaderSpinner'
import { useDispatch, useSelector } from 'react-redux'
import Content from './Content'
import { useState, useEffect, useRef } from 'react'
import ModelImg from './ModelImg'
import { fetchMovies } from '../store/actions/movieAction'


function Movie(props) {
  // console.log(props, 'movie')
  const container = useRef(null)
  const loading = useSelector(state => state.loadingReducer.loading)
  const current_movie = useSelector(state => state.movieReducer.current_movie)
  const dispatch = useDispatch()
    
  const [modal, setModal] = useState({
    showModal: false,
    img: ''
  })
  const scrollEnd = () => {
     if(container.current.scrollTop + container.current.clientHeight >= container.current.scrollHeight - 100){
       console.log('masuk1')
       loadMoreItems()
     }
    
   }
  //  STILL BUG FOR INFINITE SCROLL (UNCOMMAND CODE BELOW)
  
  // useEffect(() => {
  //   console.log(container)
  //   if(container){
  //     // console.log('masuk01', container.current)
  //     container.current.addEventListener('scroll', scrollEnd)
  //   }

  //   return () => {
  //     if(container){
  //       container.current.removeEventListener('scroll', scrollEnd)
  //     }
  //   }
  //   // eslint-disable-next-line
  // }, [])

  function loadMoreItems(){
    if (!loading && current_movie.isNext === true){
      // console.log('asuk3')
      dispatch(fetchMovies(current_movie.title, current_movie.page+1))
    }
  }
  if (loading){
    return <LoaderSpinner />
  }

  return (
    <>
    <div 
    className="row"
    style={{height:'600px', overflow:'auto', position:'relative'}}
    ref={container}
    >
      {
        props.dataMovie.map((movie, idx) => {
            return(
            <Content 
            movie={movie}
            key={idx}
            popUpImage={setModal}
            />
            )
          
        })
      }  
          
    </div>
      {
        modal.showModal ? <ModelImg handleCloseModal={setModal} image={modal.img}/> : ''
      }
    
    </>
    
  )
}

export default Movie
