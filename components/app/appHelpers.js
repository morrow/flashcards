import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = '@flashcards:notifications'

export const clearLocalNotification = ()=> AsyncStorage.remove(NOTIFICATION_KEY).then(Notifications.cancelAllScheduledNotificationsAsync)

export const createNotification = ()=> {
  return {
    title: 'Keep studying!',
    body: "Don't forget to take a quiz today!",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export const setLocalNotification = ()=> {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data)=>{
      if(data == null){
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if( status === 'granted' ){
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(9)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day'
                }
              )

              AsyncStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(true))
            }
          }
        )
      }
    })
}

export const capitalize = (input)=> input[0].toUpperCase() + input.slice(1)

_flatten = (obj, seperator, keys=[]) => {
  return Object.keys(obj).reduce((acc, key) => {
    return Object.assign(acc, (()=>{
      if(typeof obj[key] === 'object'){
        return _flatten(obj[key], seperator, keys.concat(key))
      } else {
        return { [keys.concat(key).join(seperator)]: obj[key] }
      }
    })()
    )
  }, {})
}

export const flattenObject = (obj, seperator='.') => {
  let result = {}
  let flatObject = _flatten(obj, seperator)
  Object.keys(flatObject).forEach(key=>{
    let new_key = key.split(seperator).slice(0, -1).join(seperator)
    let css_property = key.split(seperator).slice(-1).join('')
    result[ new_key ] = {
      ...result[new_key],
      [css_property]: flatObject[key]
    }
  })
  return result
}

export const getDiff = (a, b)=>{
  let result = {}
  for(let key in a){
    if(a[key] != b[key]){
      result[key] = a[key]
    }
  }
  for(let key in b){
    if(a[key] != b[key]){
      result[key] = b[key]
    }
  }
  return result
}