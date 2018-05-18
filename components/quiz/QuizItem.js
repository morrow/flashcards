import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { quizStyles } from './quizStyles'
import { appStyles } from '../app/appStyles'
import { connect } from 'react-redux'
import FlippableCard from '../card/FlippableCard'
import { updateQuizScore, finishQuiz } from './quizActions'

const QuizItem = ({ navigation, cards, quizzes, onCorrect, onIncorrect})=> {
  const params = navigation.state.params
  const quizCards = params.deck.cards
  const quiz = quizzes.byId[params.quizId]
  const card = cards.byId[quiz.cards[params.index]]
  if(card == undefined){
    return (
      <Text>Card not found. { params.index }</Text>
    )
  }
  return (
    <View style={appStyles.container}>
      <Text style={quizStyles.header}>Question {params.index + 1}/{quizCards.length}</Text>
      <FlippableCard key={card.id} front={card.question} back={card.answer} />
      <Text style={quizStyles['quizItem.flipHelp']}>Tap card to flip</Text>
      <View style={quizStyles['quizItem.actions']}>
        <TouchableOpacity
          style={[appStyles['button'], quizStyles['quizItem.actions.correctButton']]}
          onPress={()=>{onCorrect(params.quizId, params.index, navigation, params.index == quizCards.length - 1 ? -1 : params.index + 1)}}>
          <Text style={quizStyles['quizItem.actions.correctButton.text']}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[appStyles['button'], quizStyles['quizItem.actions.incorrectButton']]}
          onPress={()=>{onIncorrect(params.quizId, params.index, navigation, params.index == quizCards.length - 1 ? -1 : params.index + 1)}}>
          <Text style={quizStyles['quizItem.actions.incorrectButton.text']}>Incorrect</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const mapStateToProps = (state)=> ({
  cards: state.card,
  quizzes: state.quiz
})

const mapDispatchToProps = (dispatch)=> ({
  onCorrect:(quizId, questionId, navigation, nextIndex)=>{
    dispatch(updateQuizScore(quizId, questionId, 1))
    if(nextIndex > 0){
      navigation.navigate('QuizItem', {index: nextIndex})
    } else {
      dispatch(finishQuiz(quizId))
      navigation.navigate('Quiz', { quizId })
      navigation.navigate('QuizSummary', { quizId })
    }
  },
  onIncorrect: (quizId, questionId, navigation, nextIndex)=> {
    dispatch(updateQuizScore(quizId, questionId, 0))
    if(nextIndex > 0){
      navigation.navigate('QuizItem', {index: nextIndex})
    } else {
      dispatch(finishQuiz(quizId))
      navigation.navigate('Quiz', { quizId })
      navigation.navigate('QuizSummary', { quizId })
    }
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(QuizItem)