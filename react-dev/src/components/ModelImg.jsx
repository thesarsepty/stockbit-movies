function ModelImg(props) {
  console.log(props, 'modal');
  return (
    <div className="modal fade show pop-up">
      <div className="modal-header">
        <button 
        type="button" 
        className="btn-close"
        onClick={() => {props.handleCloseModal({showModal:false})}} 
        />
      </div>
      <div className="modal-dialog modal-dialog-centered">
        <img src={props.image} className="pop-img" alt=""/>
      </div>
    </div>
  )
}

export default ModelImg
