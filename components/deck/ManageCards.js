import React from 'react'
import Card from './Card'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { styles } from './deckStyles'
import { connect } from 'react-redux'

const ManageCards = ({ navigation, decks })=> {
  const params = navigation.state.params
  const cards = decks.filter(d=>d.key === params.key)[0].cards
  const renderItem = (item)=> (
    <TouchableOpacity
      onPress={()=>{ navigation.navigate('ManageCard', { ...item }) }}
      style={styles.manageCards.cardButton}>
      <Card data={item.item} style={styles.manageCards} />
    </TouchableOpacity>
  )
  return (
    <View style={styles.container}>
      <Text style={styles.manageCards.header}>Manage Cards</Text>
      <FlatList data={cards} renderItem={renderItem} />
    </View>
  )
}

const mapStateToProps = (state)=> ({
  decks: state.deck
})

export default connect(mapStateToProps)(ManageCards)