import {
  UPDATE_CARD_QUESTION,
  UPDATE_CARD_ANSWER } from './cardActions'

const initial_state = {
  byId: {
    0: {
      id: 0,
      question: 'Question 1',
      answer: 'Answer 2',
    },
    1: {
      id: 1,
      question: 'Question 2',
      answer: 'Answer 2',
    },
    2: {
      id: 2,
      question: 'Question 3',
      answer: 'Answer 3',
    }
  },
  allIds: [0,1,2],
}

export const cardReducer = (state=initial_state, action)=> {
  switch(action.type){
    case UPDATE_CARD_QUESTION: {
      let card = state.byId[action.id]
      card.question = action.question
      return {
        ...state,
        byId: {
          ...state.byId,
          ...card
        }
      }
      break
    }
    case UPDATE_CARD_ANSWER: {
      let card = state.byId[action.id]
      card.answer = action.answer
      return {
        ...state,
        byId: {
          ...state.byId,
          ...card
        }
      }
      break
    }
    default:
      return state
  }
}