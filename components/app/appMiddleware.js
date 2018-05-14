import { AsyncStorage } from 'react-native'
import { getDiff } from './appHelpers'

export const storageMiddleware = (store)=> {
  return next => action => {
    next(action)
    try {
      AsyncStorage.setItem('@flashcards:state', JSON.stringify(store.getState()))
    } catch (e) {
      console.log('error saving storage', e)
    }
  }
}

export const loggerMiddleware = (store)=> {
  return next => action => {
    const before = store.getState()
    next(action)
    const after = store.getState()
    console.log(action, before, after)
    console.log(JSON.stringify(getDiff(before, after), null, 2))
  }
}