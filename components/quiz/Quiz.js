import React from 'react'
import { ScrollView, View, Text, TouchableOpacity, FlatList } from 'react-native'
import { quizStyles } from './quizStyles'
import { appStyles } from '../app/appStyles'
import { connect } from 'react-redux'
import { createQuiz, resetQuizHistory } from './quizActions'

const Quiz = ({ navigation, onStartQuiz, quiz, resetQuizzes})=> {
  const deck = navigation.state.params
  const pastQuizzes = quiz.allIds.map(id=>quiz.byId[id]).filter(quiz=>quiz.deckId == deck.id).filter(quiz=> quiz.scores != undefined && Object.values(quiz.scores).length === quiz.cards.length).reverse()
  const getQuizScoreStyle = (score, prop)=>{
    if(score == 1.0) return { [prop]: '#00ff00'}
    if(score >= 0.9) return { [prop]: '#00cc00'}
    if(score >= 0.8) return { [prop]: '#00aa00'}
    if(score >= 0.7) return { [prop]: 'yellow'}
    if(score >= 0.6) return { [prop]: 'orange'}
    if(score >= 0.5) return { [prop]: 'orangered'}
    else             return { [prop]: 'red'}
  }
  const renderItem = (item)=>{
    let correct =  Object.values(item.item.scores).reduce((a,s)=>a+s)
    let total = Object.values(item.item.scores).length
    return (
      <View style={quizStyles['quiz.pastGrades.item']}>
        <Text style={quizStyles['quiz.pastGrades.item.date']}>{ (new Date(item.item.timestamp)).toLocaleString([], {month: '2-digit', day: '2-digit', year: '2-digit', hour: '2-digit', minute:'2-digit'}) }</Text>
        <Text style={quizStyles['quiz.pastGrades.item.score']}>{ correct }/{ total }</Text>
        <Text style={[quizStyles['quiz.pastGrades.item.scorePercent'], getQuizScoreStyle(correct/total, 'backgroundColor')]}>{ Math.round(1000 * (correct / total)) / 10 }%</Text>
      </View>
    )
  }
  return (
    <ScrollView contentContainerStyle={appStyles.container}>
      <Text style={quizStyles.header}>{deck.name} Quiz</Text>
      <Text style={quizStyles.subHeader}>{deck.cards.length} Cards</Text>
      <TouchableOpacity
        style={quizStyles['quiz.startQuizButton']}
        onPress={()=>{onStartQuiz(navigation, deck, quiz.allIds.length)}}>
        <Text style={[appStyles.button, quizStyles['quiz.startQuizButton.text']]}>Start Quiz</Text>
      </TouchableOpacity>
      <View style={quizStyles['quiz.pastGrades']}>
      { Object.keys(pastQuizzes).length > 0 &&
        <TouchableOpacity
          style={[appStyles.button, quizStyles['quiz.resetQuizzesButton']]}
          onPress={()=>resetQuizzes(deck.id)}>
          <Text style={quizStyles['quiz.resetQuizzesButton.text']}>Reset Quiz History</Text>
        </TouchableOpacity>
      }
        <Text style={quizStyles['quiz.pastGrades.header']}>Recent Grades: </Text>
        { Object.keys(pastQuizzes).length == 0 &&
          <Text>None yet. Good luck!</Text>
        }
        <FlatList data={pastQuizzes} renderItem={renderItem} />
      </View>
    </ScrollView>
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
  },
  resetQuizzes: (deckId)=> {
    dispatch(resetQuizHistory(deckId))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)