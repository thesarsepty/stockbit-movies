import { SET_LOADING } from '../constant/actionTypes'

const initialState = {
  loading: false
}

function loadingReducer(state = initialState, action) {
  
  switch (action.type) {
    
    case SET_LOADING:
      return { ...state, loading: action.payload }
    
    default:
      return state
      
  }
}

export default loadingReducer