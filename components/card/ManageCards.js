import React from 'react'
import Card from './Card'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { styles } from './cardStyles'
import { connect } from 'react-redux'

const ManageCards = ({ navigation, decks, cards })=> {
  const params = navigation.state.params
  const deckCards = decks.byId[params.id].cards.map(c=>cards.byId[c])
  const renderItem = (item)=> (
    <TouchableOpacity
      onPress={()=>{ navigation.navigate('ManageCard', { ...item }) }}
      style={styles.manageCards.cardButton}>
      <Card data={item.item} style={styles.manageCards.card} />
    </TouchableOpacity>
  )
  return (
    <View style={styles.container}>
      <Text style={styles.manageCards.header}>Manage Cards</Text>
      <FlatList data={deckCards} renderItem={renderItem} />
    </View>
  )
}

const mapStateToProps = (state)=> ({
  decks: state.deck,
  cards: state.card
})

export default connect(mapStateToProps)(ManageCards)