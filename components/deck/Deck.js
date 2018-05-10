import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './DeckStyles'

const Deck = ({ navigation })=> {
  const item = navigation.state.params.item
  return (
    <View style={styles.container}>
      <Text style={styles.deck.header}>{ item.name }</Text>
      <Text style={styles.deck.questions}>{ item.questions.length } questions</Text>
      <Text style={styles.deck.description}>{ item.description }</Text>
      <View style={styles.deck.buttons}>
        <TouchableOpacity
          onPress={(deck)=>{navigation.navigate('AddCard', { ...item } ) }}
          style={styles.deck.buttons.button}>
          <Text style={styles.deck.deckButtonText}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={(deck)=>{navigation.navigate('Review', { ...item } ) }}
          style={styles.deck.buttons.button}>
          <Text style={styles.deck.deckButtonText}>Review Deck</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={(deck)=>{navigation.navigate('Quiz', { ...item } ) }}
          style={styles.deck.buttons.button}>
          <Text style={styles.deck.deckButtonText}>Start quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Deck