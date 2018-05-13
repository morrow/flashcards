import { UPDATE_QUIZZES } from './quizActions'

const initial_state = {}

export const quizReducer = (state=initial_state, action)=> {
  switch(action.type){
    case UPDATE_QUIZZES: {
      return action.quizzes
    }
    default:
      return state
  }
}