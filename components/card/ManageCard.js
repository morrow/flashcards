import React from 'react'
import Card from './Card'
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import { styles } from './cardStyles'
import { connect } from 'react-redux'
import { updateCard, updateCardQuestion, updateCardAnswer, deleteCard } from './cardActions'
import { removeCardFromDecks } from '../deck/deckActions'
import { NavigationActions } from 'react-navigation'

const ManageCard = ({ navigation, decks, onChangeQuestion, onChangeAnswer, confirmDelete, saveChanges })=> {
  const params = navigation.state.params.item
  this.question = params.question
  this.answer = params.answer
  return (
    <View style={styles.container}>
      <Text style={styles['manageCards.header']}>Manage Card #{params.id + 1}</Text>
      <View style={styles['manageCards.question']}>
        <Text style={styles['manageCards.label']}>Question:</Text>
        <TextInput
          style={styles['manageCards.textInput']}
          placeholder='question'
          onChangeText={text=>onChangeQuestion(params.id, text)}
          key={params.key}
          multiline={true}
          defaultValue={params.question} />
      </View>
      <View style={styles['manageCards.answer']}>
        <Text style={styles['manageCards.label']}>Answer: </Text>
        <TextInput
          style={styles['manageCards.textInput']}
          placeholder='answer'
          onChangeText={text=>onChangeAnswer(params.id, text)}
          multiline={true}
          value={params.answer} />
      </View>
      <View style={styles['manageCards.actions']}>
        <TouchableOpacity
          onPress={()=>{saveChanges(params.id, navigation, this.question, this.answer)}}
          style={styles['manageCards.actions.updateButton']}>
          <Text style={styles['manageCards.actions.updateButton.text']}>Save Changes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{confirmDelete(params.id, navigation)}}
          style={styles['manageCards.actions.deleteButton']}>
          <Text style={styles['manageCards.actions.deleteButton.text']}>Delete Card</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const mapStateToProps = (state)=> ({
  decks: state.deck
})

const mapDispatchToProps = (dispatch)=> ({
  onChangeQuestion: (id, text)=> {
    this.question = text
    // dispatch(updateCardQuestion(id, text))
  },
  onChangeAnswer: (id, text)=> {
    this.answer = text
    // dispatch(updateCardAnswer(id, text))
  },
  saveChanges: (id, navigation, question, answer)=> {
    navigation.dispatch(NavigationActions.navigate({routeName: 'NewCard'}))
    dispatch(updateCard(id, question, answer))
  },
  confirmDelete: (id, navigation)=> {
    Alert.alert(
      'Delete Card',
      'Really delete this card?',
      [
        {text: 'Delete', onPress: () => {
          navigation.dispatch(NavigationActions.navigate({routeName: 'NewCard'}))
          dispatch(removeCardFromDecks(id))
          dispatch(deleteCard(id))
        }, style: 'destructive'},
        {text: 'Cancel', onPress: () => {}, style: 'cancel'},
      ],
      { cancelable: false }
    )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ManageCard)