import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { quizStyles } from './quizStyles'
import { appStyles } from '../app/appStyles'
import { connect } from 'react-redux'
import { createQuiz } from './quizActions'

const Quiz = ({ navigation, onStartQuiz, quiz})=> {
  const deck = navigation.state.params
  const pastQuizzes = quiz.allIds.map(id=>quiz.byId[id]).filter(quiz=> quiz.scores != undefined && Object.values(quiz.scores).length === quiz.cards.length)
  const renderItem = (item)=>{
    let correct =  Object.values(item.item.scores).reduce((a,s)=>a+s)
    let total = Object.values(item.item.scores).length
    return (
      <View style={quizStyles['quiz.pastGrades.item']}>
        <Text style={quizStyles['quiz.pastGrades.item.date']}> { (new Date()).toLocaleString() } </Text>
        <Text style={quizStyles['quiz.pastGrades.item.score']}> { correct } / { total } </Text>
      </View>
    )
  }
  return (
    <View style={appStyles.container}>
      <Text style={quizStyles.header}>{deck.name} Quiz</Text>
      <Text style={quizStyles.subHeader}>{deck.cards.length} Cards</Text>
      <TouchableOpacity
        style={quizStyles['quiz.startQuizButton']}
        onPress={()=>{onStartQuiz(navigation, deck, quiz.allIds.length)}}>
        <Text style={[appStyles.button, quizStyles['quiz.startQuizButton.text']]}>Start Quiz</Text>
      </TouchableOpacity>
      <View style={quizStyles['quiz.pastGrades']}>
        <Text style={appStyles.subHeader}>Past Grades: </Text>
        { pastQuizzes.length == 0 &&
          <Text>None yet. Good luck!</Text>
        }
        <FlatList data={pastQuizzes} renderItem={renderItem} />
      </View>
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