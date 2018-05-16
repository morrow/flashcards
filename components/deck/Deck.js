import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { deckStyles } from './deckStyles'
import { appStyles } from '../app/appStyles'
import { getCardCount } from '../card/cardHelpers'
import { connect } from 'react-redux'
import { Dimensions } from 'react-native'

const Deck = ({ navigation, cards, decks })=> {
  let deck = decks.byId[navigation.state.params.deckId]
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
      <View style={deckStyles['deck.buttons']}>
        <TouchableOpacity
          onPress={()=>{navigation.navigate('NewCard', { deckId: deck.id } ) }}
          style={deckStyles['deck.buttons.button']}>
          <Text style={[deckStyles['deck.deckButtonText'], deckStyles['deck.buttons.button.addCardText']]}>+ Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{navigation.navigate('ManageCards', { deckId: deck.id, name: deck.name } ) }}
          style={deckStyles['deck.buttons.button']}>
          <Text style={deckStyles['deck.deckButtonText']}>Manage Cards</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{navigation.navigate('ManageDeck', { deckId: deck.id, name: deck.name } ) }}
          style={deckStyles['deck.buttons.button']}>
          <Text style={deckStyles['deck.deckButtonText']}>Manage Deck</Text>
        </TouchableOpacity>
      </View>
      <View style={deckStyles['deck.buttons.reviewAndQuiz']}>
        <TouchableOpacity
            onPress={()=>{deck.cards.length > 0 ? navigation.navigate('Review', { ...deck } ) : alert('Add some cards first!') }}
            style={[deckStyles['deck.buttons.reviewButton'], deckStyles['deck.buttons.button']]}>
            <Text style={[deckStyles['deck.deckButtonText'], deckStyles['deck.buttons.reviewButton.text']]}>Review</Text>
          </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{deck.cards.length > 0 ? navigation.navigate('Quiz', { ...deck } ) : alert('Add some cards first!')}}
          style={[deckStyles['deck.buttons.button'], deckStyles['deck.buttons.startQuizButton']]}>
          <Text style={[deckStyles['deck.deckButtonText'], deckStyles['deck.buttons.startQuizButton.text']]}>Quiz</Text>
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

/*
<TouchableOpacity
          style={[appStyles['button'], deckStyles['deck.addNewCard.button']]}
          onPress={()=>{
            navigation.navigate('ManageCards', {deckId: deck.id, name: deck.name})
            navigation.navigate('NewCard', {deckId: deck.id})
          }}>
          <Text style={deckStyles['deck.addNewCard.button.text']}>+ Add Card</Text>
        </TouchableOpacity>
*/