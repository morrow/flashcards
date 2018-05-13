import { UPDATE_DECKS,
         REMOVE_CARD_FROM_DECKS } from './deckActions'

const initial_state = {
  byId: {
    0: {
      name: 'Deck 1',
      id: 0,
      cards: [0,1,2,3,4,5,6,7,8],
    },
    1: {
      name: 'Deck 2',
      id: 1,
      cards: [2],
    },
  },
  allIds: [0,1],
}

export const deckReducer = (state=initial_state, action)=> {
  switch(action.type){
    case UPDATE_DECKS: {
      return action.decks
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