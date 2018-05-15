import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { quizStyles } from './quizStyles'
import { appStyles } from '../app/appStyles'
import { connect } from 'react-redux'

const getScore = (scores)=>{
  if(Object.keys(scores).length <= 1){
    return Object.values(scores)[0] === true ? 1 : 0
  }
  return Object.values(scores).reduce((acc=0, value)=> value ? acc + 1 : acc)
}

const QuizSummary = ({ navigation, quizzes })=> {
  const params = navigation.state.params
  const quiz = quizzes.byId[params.quizId]
  return (
    <View style={appStyles.container}>
      <Text style={quizStyles.header}>{quiz.name} Summary </Text>
      <Text>{ getScore(quiz.scores) } / { quiz.cards.length } </Text>
    </View>
  )
}

const mapStateToProps = (state)=> ({
  cards: state.card,
  decks: state.deck,
  quizzes: state.quiz,
})

const mapDispatchToProps = (dispatch)=> ({

})

export default connect(mapStateToProps, mapDispatchToProps)(QuizSummary)