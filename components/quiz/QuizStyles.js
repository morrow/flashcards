import { StyleSheet } from 'react-native'
import { flattenObject } from '../app/appHelpers'

export const _quizStyles = {
  header: {
    fontSize: 35,
    fontWeight:'bold',
  },
  quizItem: {
    actions: {
      marginTop: 20,
      flexDirection: 'row',
      correctButton: {
        alignItems: 'center',
        marginRight: 10,
        text: {
          fontSize: 16,
          color: 'green',
          fontWeight: 'bold',
        },
      },
      incorrectButton: {
        alignItems: 'center',
        text: {
          fontSize: 16,
          color: 'red',
          fontWeight: 'bold',
        }
      }
    },
  },
}

export const quizStyles = StyleSheet.create(flattenObject(_quizStyles))