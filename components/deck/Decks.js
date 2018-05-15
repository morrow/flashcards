import React from 'react'
import { View, ScrollView, Text, FlatList, TouchableOpacity } from 'react-native'
import { deckStyles as styles } from './deckStyles'
import { appStyles } from '../app/appStyles'
import { connect } from 'react-redux'
import { getCardCount } from '../card/cardHelpers'

const Decks =({navigation, decks, ids})=> {
  const renderItem = (item)=> (
    <TouchableOpacity
      key={item.item.name}
      onPress={(deck)=>{navigation.navigate('Deck', { ...item } ) }}
      style={styles['decks.button']}>
      <Text style={styles['decks.button.text.name']}>{ item.item.name }</Text>
      <Text style={styles['decks.button.text.cards']}>{ getCardCount(item.item.cards, true) }</Text>
    </TouchableOpacity>
  )
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={appStyles.logo}>Flashcards</Text>
      {
        Object.keys(decks).length > 0 ?
        <FlatList data={Object.values(decks)} renderItem={renderItem} />
        :
        <Text style={appStyles.header}>Create a deck to get started:</Text>
      }
      <TouchableOpacity
        style={styles['decks.newDeck.newDeckButton']}
        onPress={()=>{navigation.navigate('NewDeck')}}>
        <Text style={styles['decks.newDeck.newDeckButton.text']}>+ New Deck</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const mapStateToProps = (state)=> ({
  decks: state.deck.byId,
  ids: state.deck.allIds,
})


export default connect(mapStateToProps)(Decks)