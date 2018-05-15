import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { deckStyles } from './deckStyles'
import { getCardCount } from '../card/cardHelpers'
import { connect } from 'react-redux'
import { Dimensions } from 'react-native'

const Deck = ({ navigation, deckId, cards, decks })=> {
  let deck = decks.byId[navigation.state.params.item.id]
  if(deck === undefined){
    return (<Text></Text>)
  }
  const setRotationStyle = ()=> {
    this.rotationStyle = Dimensions.get('window').width > 375 ? { flexDirection: 'row' } : {}
  }
  setRotationStyle()
  Dimensions.addEventListener('change', setRotationStyle)
  return (
    <ScrollView contentContainerStyle={deckStyles.container}>
      <Text style={deckStyles['deck.header']}>{ deck.name }</Text>
      <Text style={deckStyles['deck.cards']}>{ getCardCount(deck.cards, true) }</Text>
      <ScrollView>
        <Text style={deckStyles['deck.description']}>{ deck.description }</Text>
      </ScrollView>
      <View style={[this.rotationStyle, deckStyles['deck.buttons']]}>
        <TouchableOpacity
          onPress={()=>{navigation.navigate('ManageDeck', { deckId: deck.id, name: deck.name } ) }}
          style={deckStyles['deck.buttons.button']}>
          <Text style={deckStyles['deck.deckButtonText']}>Manage Deck</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{navigation.navigate('ManageCards', { deckId: deck.id, name: deck.name } ) }}
          style={deckStyles['deck.buttons.button']}>
          <Text style={deckStyles['deck.deckButtonText']}>Manage Cards</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{navigation.navigate('Review', { ...deck } ) }}
          style={deckStyles['deck.buttons.button']}>
          <Text style={deckStyles['deck.deckButtonText']}>Review Deck</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{navigation.navigate('Quiz', { ...deck } ) }}
          style={deckStyles['deck.buttons.button']}>
          <Text style={deckStyles['deck.deckButtonText']}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const mapStateToProps = (state)=> ({
  cards: state.card,
  decks: state.deck
})


export default connect(mapStateToProps)(Deck)