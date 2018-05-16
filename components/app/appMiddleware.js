import { AsyncStorage } from 'react-native'
import { getDiff, setLocalNotification } from './appHelpers'
import { FINISH_QUIZ } from '../quiz/quizActions'
// import PushNotification from 'react-native-push-notification'


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

export const notificationMiddleware = (store)=> {
  return next => action => {
    next(action)
    if(action.type === FINISH_QUIZ){
      setLocalNotification()
    }
  }
}