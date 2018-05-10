import React, { Component } from 'react'
import Router from './Router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { deckReducer } from './components/deck/deckReducer'
import { quizReducer } from './components/quiz/quizReducer'

const rootReducer = combineReducers({
  deck: deckReducer,
  quiz: quizReducer,
})

const store = createStore(rootReducer)

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