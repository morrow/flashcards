import { CREATE_DECK,
         UPDATE_DECKS,
         UPDATE_DECK,
         DELETE_DECK,
         ADD_CARD_TO_DECK,
         REMOVE_CARD_FROM_DECKS } from './deckActions'

const initial_state = {
  byId: {},
  allIds: [],
}

export const deckReducer = (state=initial_state, action)=> {
  switch(action.type){
    case CREATE_DECK: {
      let new_deck = {
        name: action.name,
        description: action.description,
        id: state.allIds.length,
        cards: []
      }
      return {
        ...state.byId,
        byId: {
          ...state.byId,
          [new_deck.id]: new_deck
        },
        allIds: [
          ...state.allIds,
          new_deck.id
        ]
      }
    }
    case UPDATE_DECK: {
      return {
        byId: {
          ...state.byId,
          [action.id]: {
            ...state.byId[action.id],
            name: action.name,
            description: action.description,
          }
        },
        allIds: state.allIds
      }
    }
    case UPDATE_DECKS: {
      return action.decks
    }
    case DELETE_DECK: {
      let byId = Object.keys(state.byId)
        .filter(key=>key != action.id)
        .reduce( (obj, key) => (obj[key] = state.byId[key], obj), {} )
      let allIds = state.allIds.filter(c=>c !== action.id)
      return {
        byId,
        allIds
      }
    }
    case ADD_CARD_TO_DECK: {
      return {
        byId: {
          ...state.byId,
          [action.deckId]: {
            ...state.byId[action.deckId],
            cards: [
              ...state.byId[action.deckId].cards,
              action.cardId
            ]
          }
        },
        allIds: state.allIds
      }
    }
    case REMOVE_CARD_FROM_DECKS: {
      let new_state = JSON.parse(JSON.stringify(state))
      Object.keys(new_state.byId).map(k=>{
        new_state.byId[k].cards = new_state.byId[k].cards.filter(c=>c !== action.id)
      })
      return {
        ...state,
        ...new_state
      }
    }
    default:
      return state
  }
}