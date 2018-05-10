import React from 'react'
import Card from './Card'
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native'
import { styles } from './deckStyles'
import { connect } from 'react-redux'

const ManageCard = ({ navigation, decks })=> {
  const params = navigation.state.params.item
  return (
    <View style={styles.container}>
      <Text style={styles.manageCards.header}>Manage Card</Text>
      <Text>Question:</Text>
      <TextInput
        style={styles.manageCards.textInput}
        placeholder='question'
        defaultValue={params.q} />
      <Text>Answer: </Text>
      <TextInput
        style={styles.manageCards.textInput}
        placeholder='answer'
        value={params.a} />
    </View>
  )
}

const mapStateToProps = (state)=> ({
  decks: state.deck
})

export default connect(mapStateToProps)(ManageCard)