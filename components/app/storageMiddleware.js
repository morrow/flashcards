import { AsyncStorage } from 'react-native'

export const storageMiddleware = (store)=> {
  return next => action => {
    console.log('before: ', store.getState())
    console.log('action: ', action)
    next(action)
    console.log('after: ', store.getState())
    try {
      AsyncStorage.setItem('@flashcards:state', JSON.stringify(store.getState()))
    } catch (e) {
      console.log('error saving storage', e)
    }
  }
}