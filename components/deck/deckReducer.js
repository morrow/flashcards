
const initial_state = [
  {
    name: 'Deck 1',
    key: 1,
    cards: [
      {
        q: 'Name of this deck is?',
        a: 'Deck 1'
      },
      {
        q: 'How many cards?',
        a: 2
      }
    ]
  },
  {
    name: 'Deck 2',
    key: 2,
    cards: [
      {
        q: 'Name of this deck is?',
        a: 'Deck 2',
      },
    ],
  },
]

export const deckReducer = (state=initial_state, action)=> {
  switch(action.type){
    default:
      return state
  }
}