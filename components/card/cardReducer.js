import {
  CREATE_CARD,
  UPDATE_CARDS,
  UPDATE_CARD,
  DELETE_CARD } from './cardActions'

const initial_state = {
  byId: {},
  allIds: [],
}

export const cardReducer = (state=initial_state, action)=> {
  switch(action.type){
    case CREATE_CARD: {
      let card = {}
      card.question = action.question
      card.answer = action.answer
      card.id = state.allIds.length
      card.key = card.id
      return {
        ...state,
        byId: {
          ...state.byId,
          [card.id]: {
            ...card
          }
        },
        allIds: [
          ...state.allIds,
          card.id
        ],
      }
    }
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