import { UPDATE_QUIZZES,
         CREATE_QUIZ,
         UPDATE_QUIZ_SCORE,
         RESET_QUIZ_HISTORY } from './quizActions'

const initial_state = {
  byId: {},
  allIds: [],
}

const newQuiz = (deck)=> ({
  name: `${deck.name} Quiz`,
  deckId: deck.id,
  cards: deck.cards,
  scores: {},
  timestamp: (new Date()).getTime(),
})

export const quizReducer = (state=initial_state, action)=> {
  switch(action.type){
    case UPDATE_QUIZZES: {
      return action.quizzes
    }
    break
    case UPDATE_QUIZ_SCORE: {
      return {
        byId: {
          ...state.byId,
          [action.quizId]: {
            ...state.byId[action.quizId],
            scores: {
              ...state.byId[action.quizId].scores,
              [action.questionId]: action.score
            }
          }
        },
        allIds: state.allIds
      }
    }
    break
    case CREATE_QUIZ: {
      return {
        byId: {
          ...state.byId,
          [state.allIds.length]: {
            ...newQuiz(action.deck)
          }
        },
        allIds: [
          ...state.allIds,
          state.allIds.length
        ]
      }
    }
    break
    case RESET_QUIZ_HISTORY: {
      let allIds = Object.keys(state.byId)
        .filter(key=>state.byId[key].deckId != action.deckId)
      let byId = allIds.reduce( (obj, key) => (obj[key] = state.byId[key], obj), {} )
      return {
        byId,
        allIds
      }
    }
    break
    default:
      return state
  }
}