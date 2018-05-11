const initial_state = {
  byId: {
    0: {
      name: 'Deck 1',
      id: 0,
      cards: [0, 1],
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
    default:
      return state
  }
}