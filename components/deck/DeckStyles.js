import { StyleSheet } from 'react-native'
import { flattenObject } from '../app/appHelpers'

export const _deckStyles = {
  container: {
    alignItems: 'center',
    padding: 10,
  },
  decks: {
    newDeck: {
      newDeckButton: {
        marginTop: 20,
        backgroundColor: 'white',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        text: {
          fontSize: 18,
          fontWeight: 'bold',
          color: 'green',
        }
      }
    },
    button: {
      flex: 1,
      padding:10,
      margin: 10,
      borderRadius:5,
      backgroundColor: '#ffffff',
      borderWidth: 1,
      borderColor:'#ccc',
      alignItems: 'center',
      text: {
        name: {
          fontSize:28,
        },
        cards: {
          marginTop: 5,
          fontSize:15,
        },
      }
    }
  },
  deck: {
    header: {
      marginTop: 20,
      fontSize: 35,
      fontWeight: 'bold',
    },
    addNewCard: {
      button: {
        marginTop: 15,
        marginLeft: 5,
        text: {
          color: 'green',
        }
      }
    },
    cards: {
      fontSize:20,
      marginTop: 15,
    },
    description: {
      fontSize:20,
      color: '#555',
      paddingTop: 20,
      height: 175,
    },
    buttons: {
      marginTop: 10,
      reviewAndQuiz: {
        marginTop: 10,
        flexDirection: 'row'
      },
      button: {
        padding: 15,
        backgroundColor: '#fff',
        margin:5,
        borderRadius:5,
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        addCardText: {
          fontWeight: 'bold',
        }
      },
      reviewButton: {
        text: {
          fontSize: 20,
          fontWeight: 'bold',
          color: '#09c',
        }
      },
      startQuizButton: {
        text:{
          fontSize: 20,
          color: 'green',
          fontWeight: 'bold',
        }
      },
    },
    deckButtonText: {
      fontSize: 16,
      // color: 'black',
    },
  },
  newDeck: {
    header: {
      fontWeight: 'bold',
      fontSize: 25,
    },
    name: {
      margin: 10,
      label: {
        fontSize: 18,
      }
    },
    textInput: {
      backgroundColor: 'white',
      padding: 5,
    }
  }
}

export const deckStyles = StyleSheet.create(flattenObject(_deckStyles))