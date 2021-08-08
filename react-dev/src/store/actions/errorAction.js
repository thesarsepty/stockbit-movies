import { SET_ERROR } from '../constant/actionTypes'

export default function setError(input){
  return {
    type: SET_ERROR,
    payload: input
  }
}