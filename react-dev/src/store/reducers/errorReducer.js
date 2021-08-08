import { SET_ERROR } from '../constant/actionTypes'

const initialState = {
  error: ''
}

function errorReducer(state = initialState, action) {
  
  switch (action.type) {
    
    case SET_ERROR:
      return { ...state, error: action.payload }
    
    default:
      return state
      
  }
}

export default errorReducer