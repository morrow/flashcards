export const UPDATE_CARD_QUESTION = 'UPDATE_CARD_QUESTION'
export const UPDATE_CARD_ANSWER = 'UPDATE_CARD_ANSWER'

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