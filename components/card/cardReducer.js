import {
  UPDATE_CARD_QUESTION,
  UPDATE_CARD_ANSWER,
  UPDATE_CARDS,
  UPDATE_CARD,
  DELETE_CARD } from './cardActions'

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
    },
    3: {
      id: 3,
      question: 'Question 4',
      answer: 'Answer 4',
    },
    4: {
      id: 4,
      question: 'Question 5',
      answer: 'Answer 5',
    },
    5: {
      id: 5,
      question: 'Question 6',
      answer: 'Answer 6',
    },
    6: {
      id: 6,
      question: 'Question 7',
      answer: 'Answer 7',
    },
    7: {
      id: 7,
      question: 'Question 8',
      answer: 'Answer 8',
    },
    8: {
      id: 8,
      question: 'Question 9',
      answer: 'Answer 9',
    }
  },
  allIds: [0,1,2,3,5,6,7,8],
}

export const cardReducer = (state=initial_state, action)=> {
  switch(action.type){
    case UPDATE_CARD: {
      let card = state.byId[action.id]
      card.question = action.question
      card.answer = action.answer
      return {
        ...state,
        byId: {
          ...state.byId,
          ...card
        }
      }
    }
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
    case UPDATE_CARDS: {
      return action.cards
    }
    case DELETE_CARD: {
      let byId = Object.keys(state.byId)
        .filter(key=>key != action.id)
        .reduce( (obj, key) => (obj[key] = state.byId[key], obj), {} )
      let allIds = state.allIds.filter(c=>c !== action.id)
      return {
        byId,
        allIds
      }
    }
    default:
      return state
  }
}