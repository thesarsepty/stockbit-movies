import { SET_LOADING } from '../constant/actionTypes'

export default function setLoading(input){
  return {
    type: SET_LOADING,
    payload: input
  }
}