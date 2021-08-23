import { useHistory } from 'react-router-dom'


function Content(props) {

  const history = useHistory()
  return (
    <div className="text-center">
        <div className="card-content border-0 bg-light mb-4 ">
          <div className="card-body">
            <div 
            className=" position-absolute d-flex justify-content-center align-items-center rounded-circle bg-white zoom-img"
            onClick={() => {props.popUpImage({showModal: true, img: props.movie.Poster})}}
            >
              <span className=""><i className="fas fa-search-plus"></i></span>
            </div>
            <img 
            src={props.movie.Poster} 
            className="img-fluid rounded" alt=""
            onClick={() => history.push(`/details/${props.movie.imdbID}`)}
            />
          </div>
          <div className="d-flex justify-content-center">
            <div className="text-center my-2 rounded border border-1" style={{width: '75%'}}>
              <small className="details-font fs-6 text-muted text-sm">{props.movie.Title}</small>
            </div>
          </div>
        </div>
      </div>
      
     

  )
}

export default Content
