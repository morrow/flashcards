import React from 'react'
import Card from './Card'
import { ScrollView, View, Text, TouchableOpacity, FlatList } from 'react-native'
import { styles, _styles } from './cardStyles'
import { connect } from 'react-redux'

const ManageCards = ({ navigation, decks, cards })=> {
  let deckId = navigation.state.params.deckId
  const deckCards = decks.byId[deckId].cards.map(c=>cards.byId[c])
  const renderItem = (item)=> (
    <TouchableOpacity
      onPress={()=>{ navigation.navigate('ManageCard', { ...item }) }}
      style={styles['manageCards.cardButton']}>
      <Card data={item.item} style={_styles.manageCards.card} />
    </TouchableOpacity>
  )
  return (
    <ScrollView contentContainerStyle={styles.container}>
      { deckCards.length <= 0 &&
        <Text style={styles['manageCards.header']}>No cards yet.</Text>
      }
      <TouchableOpacity
        onPress={()=>{ navigation.navigate('NewCard', { deckId }) }}
        style={[styles['manageCards.cardButton'], styles['manageCards.addNewCardButton']]}>
        <Text style={styles['manageCards.addNewCardButton.text']}>+ Add New Card</Text>
      </TouchableOpacity>
      <FlatList data={deckCards} renderItem={renderItem} />
    </ScrollView>
  )
}

const mapStateToProps = (state)=> ({
  decks: state.deck,
  cards: state.card
})

export default connect(mapStateToProps)(ManageCards)