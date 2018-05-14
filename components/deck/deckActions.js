export const UPDATE_DECKS = 'UPDATE_DECKS'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'
export const REMOVE_CARD_FROM_DECKS = 'REMOVE_CARD_FROM_DECKS'
export const CREATE_DECK = 'CREATE_DECK'
export const UPDATE_DECK = 'UPDATE_DECK'

export const updateDecks = (decks) =>({
  type: UPDATE_DECKS,
  decks
})

export const removeCardFromDecks = (id)=> ({
  type: REMOVE_CARD_FROM_DECKS,
  id
})

export const addCardToDeck = (deckId, cardId)=>({
  type: ADD_CARD_TO_DECK,
  deckId,
  cardId,
})

export const createDeck = (name, description)=>({
  type: CREATE_DECK,
  name,
  description,
})

export const updateDeck = (id, name)=>({
  type: UPDATE_DECK,
  id,
  name,
  description,
})