import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './deckStyles'
import { getCardCount } from '../card/cardHelpers'


const Deck = ({ navigation })=> {
  const item = navigation.state.params.item
  return (
    <View style={styles.container}>
      <Text style={styles.deck.header}>{ item.name }</Text>
      <Text style={styles.deck.cards}>{ getCardCount(item.cards, true) }</Text>
      <Text style={styles.deck.description}>{ item.description }</Text>
      <View style={styles.deck.buttons}>
        <TouchableOpacity
          onPress={(deck)=>{navigation.navigate('ManageCards', { ...item } ) }}
          style={styles.deck.buttons.button}>
          <Text style={styles.deck.deckButtonText}>Manage Cards</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={(deck)=>{navigation.navigate('Review', { ...item } ) }}
          style={styles.deck.buttons.button}>
          <Text style={styles.deck.deckButtonText}>Review Deck</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={(deck)=>{navigation.navigate('Quiz', { ...item } ) }}
          style={[styles.deck.buttons.button, {color:'green'}]}>
          <Text style={styles.deck.deckButtonText}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Deck