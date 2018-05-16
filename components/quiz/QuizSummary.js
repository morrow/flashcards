import React from 'react'
import { ScrollView, View, Text, TouchableOpacity, FlatList } from 'react-native'
import { quizStyles } from './quizStyles'
import { appStyles } from '../app/appStyles'
import { capitalize } from '../app/appHelpers'
import { connect } from 'react-redux'

const getScore = (scores)=> {
  if(scores){
    return Object.values(scores).reduce((sum, x) => sum + parseInt(x))
  } else {
    return 0
  }
}

const getScoreMessage = (percent)=>{
  if(percent == 1)         return 'Perfect Score!!!'
  else if(percent >= 0.9)  return 'Excellent work!!'
  else if(percent >= 0.8)  return 'Great job!'
  else if(percent >= 0.7)  return 'Getting there!'
  else                     return 'Keep studying!'
}

const QuizSummary = ({ navigation, quizzes, cards })=> {
  const params = navigation.state.params
  const quiz = quizzes.byId[params.quizId]
  const quizCards = Object.keys(quiz.scores).map(c=>({
    score: quiz.scores[c],
    card: cards.byId[c]
  }))
  const renderItem = (item)=> {
    let score = item.item.score ? 'correct' : 'incorrect'
    return (
      <View style={quizStyles[`summary.card`]}>
        <Text style={ quizStyles['summary.card.question']}>Question: { item.item.card.question }</Text>
        <Text style={ quizStyles['summary.card.answer']}>Answer: { item.item.card.answer }</Text>
        <Text style={ quizStyles[`summary.card.score.${score}`] }>Score: { capitalize(score) }</Text>
      </View>
    )
  }
  return (
    <ScrollView contentContainerStyle={appStyles.container}>
      <Text style={quizStyles['header']}>{quiz.name} Summary </Text>
      <Text style={quizStyles['subHeader']}>You answered { getScore(quiz.scores) } / { quiz.cards.length } correctly</Text>
      <Text style={quizStyles['subHeader']}> Your grade: { Math.round((getScore(quiz.scores) / quiz.cards.length) * 10000) / 100 }%</Text>
      <Text style={quizStyles['subHeader']}> { getScoreMessage(getScore(quiz.scores) / quiz.cards.length) }</Text>
      <FlatList style={quizStyles['summary.cards']} data={quizCards} renderItem={renderItem} />
    </ScrollView>
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