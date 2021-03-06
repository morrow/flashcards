import React from 'react'
import Deck from './Deck'
import { KeyboardAvoidingView, View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import { deckStyles, _deckStyles } from './deckStyles'
import { appStyles } from '../app/appStyles'
import { connect } from 'react-redux'
import { createDeck, updateDeck, deleteDeck } from './deckActions'
import { addDeckToDeck, removeDeckFromDecks } from '../deck/deckActions'
import { NavigationActions } from 'react-navigation'

const NewDeck = ({ navigation, deck, decks, onChangeName, onChangeDescription, cancel, onSubmit })=> {
  const params = {
    id: decks.allIds.length,
    key: decks.allIds.length,
    name: '',
    description: '',
  }
  this.name = ''
  this.description = ''
  return (
    <KeyboardAvoidingView behavior="padding" style={appStyles['container']}>
      <View style={[appStyles['form'], deckStyles['newDeck.name']]}>
        <Text style={[appStyles['form.label'], deckStyles['newDeck.name.label']]}>Deck Name:</Text>
        <TextInput
          style={[appStyles['form.textInput'], deckStyles['newDeck.textInput']]}
          placeholder='name'
          onChangeText={value=>onChangeName(value)}
          key={params.key}
          multiline={true} />
      </View>
      <View style={[appStyles['form'], deckStyles['newDeck.description']]}>
        <Text style={[appStyles['form.label'], deckStyles['newDeck.description.label']]}>Deck Description:</Text>
        <TextInput
          style={[appStyles['form.textInput'], deckStyles['newDeck.description.textInput']]}
          placeholder='description'
          onChangeText={value=>onChangeDescription(value)}
          defaultValue={this.description}
          multiline={true} />
      </View>
      <View style={[appStyles['form.actions'], deckStyles['newDeck.actions']]}>
        <TouchableOpacity
          onPress={()=>{onSubmit(navigation, this.name, this.description, params.id)}}
          style={[appStyles['form.actions.updateButton'], deckStyles['newDeck.actions.updateButton']]}>
          <Text style={[appStyles['form.actions.updateButton.text'], deckStyles['newDeck.actions.updateButton.text']]}>Create Deck</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{cancel(navigation)}}
          style={[appStyles['form.actions.deleteButton'], deckStyles['newDeck.actions.deleteButton']]}>
          <Text style={[appStyles['form.actions.deleteButton.text'], deckStyles['newDeck.actions.deleteButton.text']]}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const mapStateToProps = (state)=> ({
  decks: state.deck,
})

const mapDispatchToProps = (dispatch)=> ({
  onChangeDescription: (value)=>{
    this.description = value
  },
  onChangeName: (text)=> {
    this.name = text
  },
  onSubmit: (navigation, name, description, deckId)=> {
    if(name && name.replace(/ /g, '') !== ''){
      navigation.dispatch(NavigationActions.back())
      navigation.navigate('Deck', { deckId, name })
      dispatch(createDeck(name, description))
    } else {
      navigation.dispatch(NavigationActions.back())
    }
  },
  cancel: (navigation)=> {
    this.name = ''
    navigation.dispatch(NavigationActions.back())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(NewDeck)