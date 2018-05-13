export const UPDATE_DECKS = 'UPDATE_DECKS'
export const REMOVE_CARD_FROM_DECKS = 'REMOVE_CARD_FROM_DECKS'

export const updateDecks = (decks) =>({
  type: UPDATE_DECKS,
  decks
})

export const removeCardFromDecks = (id)=> ({
  type: REMOVE_CARD_FROM_DECKS,
  id
})