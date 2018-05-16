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
      borderRadius: 10,
      text: {
        padding: 10,
        fontWeight: 'bold',
        fontSize: 30,
        color: 'green',
      }
    },
    resetQuizzesButton: {
      width: 150,
      backgroundColor: '#fafafa',
      textAlign: 'center',
      borderRadius: 5,
      text: {
        textAlign: 'center',
        color: 'red',
        padding: 5,
      }
    },
    pastGrades: {
      alignItems: 'center',
      marginTop: 30,
      header: {
        fontSize: 18,
        marginTop: 20,
        marginBottom: 5,
        fontWeight: 'bold',
      },
      item: {
        flexDirection: 'row',
        score:{
          width: 55,
          textAlign: 'center',
          borderWidth: 1,
          borderColor: '#ccc',
          fontWeight:'bold',
          padding: 5,
          fontFamily: 'courier',
        },
        scorePercent: {
          textAlign: 'center',
          width: 55,
          borderWidth: 1,
          borderColor: '#ccc',
          fontWeight:'bold',
          padding: 5,
          fontFamily: 'courier',
        },
        date: {
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 5,
          textAlign: 'right',
          fontFamily: 'courier',
        },
      },
    },
  },
  quizItem: {
    actions: {
      marginTop: 20,
      flexDirection: 'row',
      correctButton: {
        borderRadius: 5,
        alignItems: 'center',
        marginRight: 10,
        padding: 10,
        text: {
          fontSize: 20,
          color: 'green',
          fontWeight: 'bold',
        },
      },
      incorrectButton: {
        borderRadius: 5,
        alignItems: 'center',
        padding: 10,
        marginLeft: 10,
        text: {
          fontSize: 20,
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
      width: 250,
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 5,
      borderWidth: 1,
      alignItems: 'center',
      borderColor: '#ccc',
      margin: 5,
      justifyContent: 'center',
      question: {
        fontSize: 15,
        correct: {
          fontSize: 15,
          color: 'green',
        },
        incorrect: {
          fontSize: 15,
          color: 'red'
        },
      },
      seperator: {
        paddingTop: 5,
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#aaa',
        width: 200,
      },
      answer: {
        fontSize: 15,
        correct: {
          fontSize: 15,
          color: 'green',
        },
        incorrect: {
          fontSize: 15,
          color: 'red'
        },
      },
      score: {
        correct: {
          fontSize: 15,
          color: 'green',
        },
        incorrect: {
          fontSize: 15,
          color: 'red'
        },
      },
    }
  },
}

export const quizStyles = StyleSheet.create(flattenObject(_quizStyles))