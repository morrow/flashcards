import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { styles } from './deckStyles'
import { connect } from 'react-redux'
import { getCardCount } from '../card/cardHelpers'

const Decks =({navigation, decks})=> {
  const renderItem = (item)=> (
    <TouchableOpacity
      key={item.item.name}
      onPress={(deck)=>{navigation.navigate('Deck', { ...item } ) }}
      style={styles.decks.button}>
      <Text style={styles.decks.button.text.name}>{ item.item.name }</Text>
      <Text style={styles.decks.button.text.cards}>{ getCardCount(item.item.cards, true) }</Text>
    </TouchableOpacity>
  )
  return (
    <View style={styles.container}>
      <FlatList data={decks} renderItem={renderItem} />
    </View>
  )
}

const mapStateToProps = (state)=> ({
  decks: Object.values(state.deck.byId)
})


export default connect(mapStateToProps)(Decks)