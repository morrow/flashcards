export const UPDATE_QUIZZES = 'UPDATE_QUIZZES'
export const CREATE_QUIZ = 'CREATE_QUIZ'
export const UPDATE_QUIZ_SCORE = 'UPDATE_QUIZ_SCORE'
export const RESET_QUIZ_HISTORY = 'RESET_QUIZ_HISTORY'
export const FINISH_QUIZ = 'FINISH_QUIZ'

export const updateQuizzes = (quizzes)=>({
  type: UPDATE_QUIZZES,
  quizzes
})

export const createQuiz = (deck)=>({
  type: CREATE_QUIZ,
  deck
})

export const updateQuizScore = (quizId, questionId, score)=> ({
  type: UPDATE_QUIZ_SCORE,
  quizId,
  questionId,
  score,
})

export const resetQuizHistory = (deckId)=> ({
  type: RESET_QUIZ_HISTORY,
  deckId
})

export const finishQuiz = (quizId)=>({
  type: FINISH_QUIZ,
  quizId
})