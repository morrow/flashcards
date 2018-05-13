export const UPDATE_CARDS = 'UPDATE_CARDS'
export const UPDATE_CARD = 'UPDATE_CARD'
export const UPDATE_CARD_QUESTION = 'UPDATE_CARD_QUESTION'
export const UPDATE_CARD_ANSWER = 'UPDATE_CARD_ANSWER'
export const DELETE_CARD = 'DELETE_CARD'

export const updateCard = (id, question, answer)=>({
  type: UPDATE_CARD,
  question,
  answer,
  id,
})

export const updateCardQuestion = (id, question)=>({
  type: UPDATE_CARD_QUESTION,
  question,
  id,
})

export const updateCardAnswer = (id, answer)=>({
  type: UPDATE_CARD_ANSWER,
  answer,
  id,
})

export const updateCards = (cards) =>({
  type: UPDATE_CARDS,
  cards
})

export const deleteCard = (id)=> ({
  type: DELETE_CARD,
  id
})