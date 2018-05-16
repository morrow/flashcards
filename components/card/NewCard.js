import React from 'react'
import Card from './Card'
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import { styles, _styles } from './cardStyles'
import { appStyles } from '../app/appStyles'
import { connect } from 'react-redux'
import { createCard, updateCard, deleteCard } from './cardActions'
import { addCardToDeck, removeCardFromDecks } from '../deck/deckActions'
import { NavigationActions } from 'react-navigation'

const NewCard = ({ navigation, decks, cards, onChangeQuestion, onChangeAnswer, cancel, createCard, saveChanges })=> {
  const params = {
    id: decks.allIds.length,
    key: decks.allIds.length,
    deckId: navigation.state.params.deckId,
    question: '',
    answer: '',
  }
  this.question = params.question
  this.answer = params.answer
  return (
    <View style={styles.container}>
      <Text style={[appStyles.header, styles['manageCards.header']]}>New Card </Text>
      <View style={styles['manageCards.question']}>
        <Text style={styles['manageCards.label']}>Question:</Text>
        <TextInput
          style={styles['manageCards.textInput']}
          placeholder='question'
          onChangeText={text=>onChangeQuestion(text)}
          key={params.key}
          multiline={true}
          defaultValue={params.question} />
      </View>
      <View style={styles['manageCards.answer']}>
        <Text style={styles['manageCards.label']}>Answer: </Text>
        <TextInput
          style={styles['manageCards.textInput']}
          placeholder='answer'
          onChangeText={text=>onChangeAnswer(text)}
          multiline={true}
          value={params.answer} />
      </View>
      <View style={styles['manageCards.actions']}>
        <TouchableOpacity
          onPress={()=>{createCard(navigation, this.question, this.answer, cards.allIds.length, params.deckId)}}
          style={styles['manageCards.actions.updateButton']}>
          <Text style={styles['manageCards.actions.updateButton.text']}>Save Changes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{cancel(navigation)}}
          style={styles['manageCards.actions.deleteButton']}>
          <Text style={styles['manageCards.actions.deleteButton.text']}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const mapStateToProps = (state)=> ({
  decks: state.deck,
  cards: state.card
})

const mapDispatchToProps = (dispatch)=> ({
  onChangeQuestion: (text)=> {
    this.question = text
  },
  onChangeAnswer: (text)=> {
    this.answer = text
  },
  createCard: (navigation, question, answer, id, deckId)=> {
    navigation.dispatch(NavigationActions.back())
    dispatch(createCard(question, answer))
    dispatch(addCardToDeck(deckId, id))
  },
  cancel: (navigation)=> {
    this.question = ''
    this.answer = ''
    navigation.dispatch(NavigationActions.back())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(NewCard)