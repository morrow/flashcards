import { StyleSheet } from 'react-native'
import { flattenObject } from '../app/appHelpers'

export const _quizStyles = {
  header: {
    fontSize: 35,
    fontWeight:'bold',
  },
  subHeader: {
    marginTop: 15,
    fontSize: 20,
  },
  quiz: {
    startQuizButton: {
      marginTop: 30,
      text: {
        borderRadius: 5,
        padding: 10,
        fontWeight: 'bold',
        fontSize: 20,
      }
    },
    pastGrades: {
      marginTop: 20,
      item: {
        flexDirection: 'row',
        score:{
          borderWidth: 1,
          borderColor: '#ccc',
          fontWeight:'bold',
          width: 50,
          padding: 5,
        },
        date: {
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 5,
        },
      },
    },
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
  review: {
    header: {
      marginBottom: 10,
    },
    list: {

    },
    cardButton: {
      position: 'relative',
      padding: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      width: 200,
      minHeight: 100,
      justifyContent: 'center',
      alignItems: 'center',
      backfaceVisibility: 'hidden',
      backgroundColor:'white',
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      paddingTop: 5,
      text: {
        fontSize: 20,
      },
      header: {
        fontSize: 14,
        color: '#666',
        paddingBottom: 5,
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
  summary: {
    cards: {
      marginTop: 20,
    },
    card: {
      width: 200,
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 5,
      borderWidth: 1,
      alignItems: 'center',
      borderColor: '#ccc',
      margin: 10,
      justifyContent: 'center',
      question: {
        fontSize: 18,
      },
      answer: {
        fontSize: 18,
      },
      score: {
        correct: {
          fontSize: 18,
          color: 'green',
        },
        incorrect: {
          fontSize: 18,
          color: 'red'
        },
      },
    }
  },
}

export const quizStyles = StyleSheet.create(flattenObject(_quizStyles))