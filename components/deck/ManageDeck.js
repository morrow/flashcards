import React from 'react'
import Deck from './Deck'
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import { deckStyles, _deckStyles } from './deckStyles'
import { appStyles } from '../app/appStyles'
import { connect } from 'react-redux'
import { updateDeck, deleteDeck } from './deckActions'
import { NavigationActions } from 'react-navigation'

const ManageDeck = ({ navigation, decks, onChangeName, onChangeDescription, cancel, onUpdate, confirmDelete })=> {
  let deckId = navigation.state.params.deckId
  let deck = decks.byId[deckId]
  if(deck === undefined){
    return (<Text style={appStyles.container}>No Deck Found</Text>)
  }
  this.name = deck.name
  this.description = deck.description
  return (
    <View style={appStyles['container']}>
      <Text style={deckStyles['newDeck.header']}> Manage Deck </Text>
      <View style={[appStyles['form'], deckStyles['newDeck.name']]}>
        <Text style={[appStyles['form.label'], deckStyles['newDeck.name.label']]}>Deck Name:</Text>
        <TextInput
          style={[appStyles['form.textInput'], deckStyles['newDeck.textInput']]}
          placeholder='name'
          onChangeText={value=>onChangeName(value)}
          defaultValue={this.name}
          key={deckId}
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
          onPress={()=>{onUpdate(navigation, deckId, this.name)}}
          style={[appStyles['form.actions.updateButton'], deckStyles['newDeck.actions.updateButton']]}>
          <Text style={[appStyles['form.actions.updateButton.text'], deckStyles['newDeck.actions.updateButton.text']]}>Update Deck</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{confirmDelete(deckId, navigation)}}
          style={[appStyles['form.actions.deleteButton']]}>
          <Text style={[appStyles['form.actions.deleteButton.text']]}>Delete Deck</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{cancel(navigation)}}
          style={[appStyles['form.actions.cancelButton'], deckStyles['newDeck.actions.cancelButton']]}>
          <Text style={[appStyles['form.actions.cancelButton.text'], deckStyles['newDeck.actions.cancelButton.text']]}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const mapStateToProps = (state)=> ({
  decks: state.deck,
})

const mapDispatchToProps = (dispatch)=> ({
  onChangeDescription: (value)=>{
    this.description = description
  },
  onChangeName: (text)=> {
    this.name = text
  },
  onUpdate: (navigation, id, name)=> {
    navigation.dispatch(NavigationActions.navigate({routeName: 'Deck'}, { id, name }))
    if(name && name.replace(/ /g, '') !== ''){
      dispatch(updateDeck(id, name, description))
    }
  },
  cancel: (navigation)=> {
    this.name = ''
    navigation.dispatch(NavigationActions.back())
  },
  confirmDelete: (id, navigation)=> {
    Alert.alert(
      'Delete Deck',
      'Really delete this deck?',
      [
        {text: 'Delete', onPress: () => {
          navigation.dispatch(NavigationActions.navigate({routeName: 'Decks'}, {}))
          dispatch(deleteDeck(id))
        }, style: 'destructive'},
        {text: 'Cancel', onPress: () => {}, style: 'cancel'},
      ],
      { cancelable: false }
    )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ManageDeck)