import React from 'react'
import FlippableCard from '../card/FlippableCard'
import { ScrollView, Text, FlatList } from 'react-native'
import { quizStyles, _quizStyles } from './quizStyles'
import { appStyles } from '../app/appStyles'
import { connect } from 'react-redux'


const Review = ({ navigation, decks, cards, flipCard })=> {
  const params = navigation.state.params
  const deckCards = decks.byId[params.id].cards.map(c=>cards.byId[c])
  const renderItem = (item)=> {
    const card = item.item
    return (
      <FlippableCard kkey={card.id} front={card.question} back={card.answer} />
    )
  }
  return (
    <ScrollView contentContainerStyle={appStyles.container}>
      <Text style={[appStyles['header'], quizStyles['review.header']]}>{ params.name } Review</Text>
      <Text style={quizStyles['quizItem.flipHelp']}>Tap card to flip</Text>
      <FlatList style={quizStyles['review.list']} data={deckCards} renderItem={renderItem} />
    </ScrollView>
  )
}

const mapStateToProps = (state)=> ({
  decks: state.deck,
  cards: state.card
})

const mapDispatchToProps = (dispatch)=>({
  flipCard:(card)=>{
    console.log(this)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Review)