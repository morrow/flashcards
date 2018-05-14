import { CREATE_DECK,
         UPDATE_DECKS,
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
        id: state.allIds.length,
        cards: []
      }
      return {
        ...state.byId,
        byId: {
          [new_deck.id]: new_deck
        },
        allIds: [
          ...state.allIds,
          new_deck.id
        ]
      }
    }
    case UPDATE_DECKS: {
      return action.decks
    }
    case ADD_CARD_TO_DECK: {
      return {
        ...state.byId,
        byId: {
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