import { StyleSheet } from 'react-native'
import { flattenObject } from '../app/appHelpers'

export const _styles = {
  container: {
    alignItems: 'stretch',
    padding: 20,
  },
  newCard: {
    header: {
      fontSize: 20,
    }
  },
  flippable: {
    cardButton: {
      position: 'relative',
      padding: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      shadowColor: '#aaa',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowRadius: 10,
      shadowOpacity: 0.6,
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
  manageCards: {
    header: {
      fontSize:25,
      marginBottom: 25,
      textAlign: 'center',
    },
    cardButton: {
      padding: 10,
      backgroundColor: 'white',
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      borderRadius: 5,
    },
    addNewCardButton: {
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#aaa',
      text: {
        fontSize: 16,
        color: 'green',
        fontWeight: 'bold',
      },
    },
    card: {
      separator: {
        margin: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
      },
      question: {
        textAlign:'center',
        fontSize:20,
      },
      answer: {
        fontSize:20,
        textAlign:'center',
      }
    },
    label: {
      fontSize: 20,
    },
    question: {
      marginTop: 10,
    },
    answer: {
      marginTop: 10,
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#ccc',
      textAlign: 'left',
      backgroundColor: 'white',
      padding: 10,
      margin: 10,
      fontSize: 20,
      width: 300,
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
      updateButton: {
        borderColor: '#ccc',
        borderWidth: 1,
        alignItems: 'center',
        padding: 10,
        marginRight: 10,
        borderRadius: 5,
        backgroundColor: 'white',
        text: {
          color: 'green',
        }
      },
      deleteButton: {
        borderColor: '#ccc',
        borderWidth: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        marginLeft: 10,
        borderRadius: 5,
        text: {
          color:'red',
        }
      }
    }
  }
}

export const styles = StyleSheet.create(flattenObject(_styles))