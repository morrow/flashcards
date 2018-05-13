export const getCardCount = (cards, include_words)=> {
  let n = cards.length
  if(include_words){
    return `${n} card${n > 1 ? 's' : ''}`
  }
  return n
}