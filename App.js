import React, { Component } from 'react'
import Router from './Router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { cardReducer } from './components/card/cardReducer'
import { deckReducer } from './components/deck/deckReducer'
import { quizReducer } from './components/quiz/quizReducer'
import { storageMiddleware, loggerMiddleware } from './components/app/appMiddleware'
import { AsyncStorage } from 'react-native'
import { updateCards } from './components/card/cardActions'
import { updateDecks } from './components/deck/deckActions'
import { updateQuizzes } from './components/quiz/quizActions'

const rootReducer = combineReducers({
  card: cardReducer,
  deck: deckReducer,
  quiz: quizReducer,
})

const store = createStore(rootReducer, undefined, applyMiddleware(storageMiddleware, loggerMiddleware))

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
