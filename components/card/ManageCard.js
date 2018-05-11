import React from 'react'
import Card from './Card'
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native'
import { styles } from './cardStyles'
import { connect } from 'react-redux'
import { updateCardQuestion, updateCardAnswer } from './cardActions'

const ManageCard = ({ navigation, decks, onChangeQuestion, onChangeAnswer })=> {
  const params = navigation.state.params.item
  return (
    <View style={styles.container}>
      <Text style={styles.manageCards.header}>Manage Card</Text>
      <Text>Question:</Text>
      <TextInput
        style={styles.manageCards.textInput}
        placeholder='question'
        onChangeText={text=>onChangeQuestion(params.id, text)}
        key={params.key}
        defaultValue={params.question} />
      <Text>Answer: </Text>
      <TextInput
        style={styles.manageCards.textInput}
        placeholder='answer'
        onChangeText={text=>onChangeAnswer(params.id, text)}
        value={params.answer} />
    </View>
  )
}

const mapStateToProps = (state)=> ({
  decks: state.deck
})

const mapDispatchToProps = (dispatch)=> ({
  onChangeQuestion: (id, text)=> {
    dispatch(updateCardQuestion(id, text))
  },
  onChangeAnswer: (id, text)=> {
    dispatch(updateCardAnswer(id, text))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ManageCard)