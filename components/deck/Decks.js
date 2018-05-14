import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { deckStyles as styles } from './deckStyles'
import { connect } from 'react-redux'
import { getCardCount } from '../card/cardHelpers'

const Decks =({navigation, decks})=> {
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
    <View style={styles.container}>
      <FlatList data={Object.values(decks)} renderItem={renderItem} />
      <TouchableOpacity
        style={styles['decks.newDeck.newDeckButton']}
        onPress={()=>{navigation.navigate('NewDeck')}}>
        <Text style={styles['decks.newDeck.newDeckButton.text']}>New Deck</Text>
      </TouchableOpacity>
    </View>
  )
}

const mapStateToProps = (state)=> ({
  decks: state.deck.byId
})


export default connect(mapStateToProps)(Decks)