import React, { Component } from 'react'
import Router from './Router'
import { Provider } from 'react-redux'
import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { storageMiddleware, loggerMiddleware, notificationMiddleware } from './appMiddleware'
import { cardReducer } from '../card/cardReducer'
import { deckReducer } from '../deck/deckReducer'
import { quizReducer } from '../quiz/quizReducer'
import { updateCards } from '../card/cardActions'
import { updateDecks } from '../deck/deckActions'
import { updateQuizzes } from '../quiz/quizActions'

const rootReducer = combineReducers({
  card: cardReducer,
  deck: deckReducer,
  quiz: quizReducer,
})

const store = createStore(rootReducer, undefined, applyMiddleware(storageMiddleware, loggerMiddleware, notificationMiddleware))

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

// disable yellow block
console.disableYellowBox = true;

// AsyncStorage.removeItem('@flashcards:state')

AsyncStorage.getItem('@flashcards:state').then((result)=>{
  if(result){
    try {
      store.dispatch(updateCards(JSON.parse(result).card))
      store.dispatch(updateDecks(JSON.parse(result).deck))
      store.dispatch(updateQuizzes(JSON.parse(result).quiz))
    } catch(e){
      console.log('error initializing state', e)
    }
  }
})
