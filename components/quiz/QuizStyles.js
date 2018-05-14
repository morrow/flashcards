import { StyleSheet } from 'react-native'
import { flattenObject } from '../app/appHelpers'

export const _styles = {
  container: {
    alignItems: 'center',
    paddingTop: 20,
  },
  header: {
    fontSize: 20,
  },
  review: {
    cardButton: {
      position: 'relative',
      padding: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      width: 250,
      minHeight: 100,
      justifyContent: 'center',
      alignItems: 'center',
      backfaceVisibility: 'hidden',
      backgroundColor:'white',
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      text: {
        fontSize: 20,
      },
      answerHeader: {
        fontSize: 14,
        color: '#666',
        position: 'absolute',
        top: 10,
      },
      front: {

      },
      back: {
        position:'absolute',
        top: 5,
      },
      question:{

      },
      answer: {
        color: 'blue',
      },
    }
  },
}

export const styles = StyleSheet.create(flattenObject(_styles))