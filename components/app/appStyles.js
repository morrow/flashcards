import { StyleSheet } from 'react-native'
import { flattenObject } from '../app/appHelpers'

export const _appStyles = {
  container: {
    alignItems: 'center',
    padding: 20,
  },
  button: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
    text: {
      fontSize: 18,
    }
  },
  header: {
    marginTop: 10,
    fontSize: 23,
  },
  logo: {
    fontFamily: 'Avenir-Black',
    fontSize: 40,
  },
  form: {
    label: {

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
          fontSize: 16,
        }
      },
      deleteButton: {
        borderColor: '#ccc',
        borderWidth: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        marginRight: 10,
        borderRadius: 5,
        text: {
          color:'red',
          fontSize: 16,
        },
      },
      cancelButton: {
        borderColor: '#ccc',
        borderWidth: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        marginRight: 10,
        borderRadius: 5,
        text: {
          color:'#333',
          fontSize: 16,
        },
      },
    },
  },
}

export const appStyles = StyleSheet.create(flattenObject(_appStyles))

