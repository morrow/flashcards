import { StyleSheet } from 'react-native'
import { flattenObject } from '../app/appHelpers'

export const _deckStyles = {
  container: {
    alignItems: 'center',
    paddingTop: 20,
  },
  decks: {
    newDeck: {
      newDeckButton: {
        backgroundColor: 'white',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        text: {
          fontSize: 18,
          fontWeight: 'bold',
        }
      }
    },
    button: {
      flex: 1,
      padding:15,
      margin: 10,
      borderRadius:5,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      text: {
        name: {
          fontSize:25,
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
      marginTop: 30,
      fontSize: 40,
      fontWeight: 'bold',
    },
    cards: {
      fontSize:20,
      marginTop: 15,
    },
    description: {
      fontSize:30,
      height:200,
    },
    buttons: {
      marginTop: 10,
      button: {
        padding: 15,
        backgroundColor: '#fff',
        margin:5,
        borderRadius:5,
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
      }
    },
    deckButtonText: {
      fontSize: 20,
      // color: 'black',
    },
  },
  newDeck: {
    header: {
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