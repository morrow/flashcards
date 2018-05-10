import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { styles } from './deckStyles'
import { connect } from 'react-redux'

const Decks =({navigation, decks})=> {
  const renderItem = (item)=> (
    <TouchableOpacity
      key={item.item.name}
      onPress={(deck)=>{navigation.navigate('Deck', { ...item } ) }}
      style={styles.decks.button}>
      <Text style={styles.decks.button.text.name}>{ item.item.name }</Text>
      <Text style={styles.decks.button.text.cards}>{ item.item.cards.length } card{item.item.cards.length > 1 ? 's' : ''}</Text>
    </TouchableOpacity>
  )
  return (
    <View style={styles.container}>
      <FlatList data={decks} renderItem={renderItem} />
    </View>
  )
}

const mapStateToProps = (state)=> ({
  decks: state.deck
})


export default connect(mapStateToProps)(Decks)