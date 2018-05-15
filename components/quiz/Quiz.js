import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { quizStyles } from './quizStyles'
import { appStyles } from '../app/appStyles'
import { connect } from 'react-redux'
import { createQuiz } from './quizActions'

const Quiz = ({ navigation, onStartQuiz, quiz})=> {
  const deck = navigation.state.params
  return (
    <View style={appStyles.container}>
      <Text style={quizStyles.header}>{deck.name} Quiz</Text>
      <TouchableOpacity
        onPress={()=>{onStartQuiz(navigation, deck, quiz.allIds.length)}}>
        <Text style={appStyles.button}>Start Quiz</Text>
      </TouchableOpacity>
    </View>
  )
}

const mapStateToProps = (state)=> ({
  cards: state.card,
  decks: state.deck,
  quiz: state.quiz,
})

const mapDispatchToProps = (dispatch)=> ({
  onStartQuiz: (navigation, deck, quizId)=> {
    navigation.navigate('QuizItem', {deck, index: 0, quizId })
    dispatch(createQuiz(deck))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)