import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { quizStyles } from './quizStyles'
import { appStyles } from '../app/appStyles'
import { connect } from 'react-redux'
import FlippableCard from '../card/FlippableCard'

const QuizItem = ({ navigation, cards, onCorrect, onIncorrect})=> {
  const params = navigation.state.params
  const quizCards = params.deck.cards
  const card = cards.byId[params.index]
  if(card == undefined){
    return (
      <Text>Card not found. { params.index }</Text>
    )
  }
  return (
    <View style={appStyles.container}>
      <Text style={quizStyles.header}>Quiz Item</Text>
      <FlippableCard front={card.question} back={card.answer} />
      <View style={quizStyles['quizItem.actions']}>
        <TouchableOpacity
          style={[appStyles['button'], quizStyles['quizItem.actions.correctButton']]}
          onPress={()=>{onCorrect(navigation, params.index == quizCards.length - 1 ? -1 : params.index + 1)}}>
          <Text style={quizStyles['quizItem.actions.correctButton.text']}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[appStyles['button'], quizStyles['quizItem.actions.incorrectButton']]}
          onPress={()=>{onIncorrect(navigation, params.index == quizCards.length - 1 ? -1 : params.index + 1)}}>
          <Text style={quizStyles['quizItem.actions.incorrectButton.text']}>Incorrect</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const mapStateToProps = (state)=> ({
  cards: state.card
})

const mapDispatchToProps = (dispatch)=> ({
  onCorrect:(navigation, nextIndex)=>{
    if(nextIndex > 0){
      navigation.navigate('QuizItem', {index: nextIndex})
    } else {
      navigation.navigate('QuizSummary', { })
    }
  },
  onIncorrect: (navigation, nextIndex)=> {
    navigation.navigate('QuizItem', {index: nextIndex})
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(QuizItem)