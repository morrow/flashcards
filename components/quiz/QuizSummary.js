import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { quizStyles } from './quizStyles'
import { appStyles } from '../app/appStyles'
import { connect } from 'react-redux'

const QuizSummary = ({ navigation })=> {
  const deck = navigation.state.params
  return (
    <View style={appStyles.container}>
      <Text style={quizStyles.header}>{deck.name} Quiz Summary </Text>
    </View>
  )
}

const mapStateToProps = (state)=> ({
  cards: state.card,
  decks: state.deck,
})

const mapDispatchToProps = (dispatch)=> ({

})

export default connect(mapStateToProps, mapDispatchToProps)(QuizSummary)