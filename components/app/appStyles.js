import { StyleSheet } from 'react-native'
import { flattenObject } from '../app/appHelpers'

export const _appStyles = {
  container: {
    alignItems: 'center',
    paddingTop: 20,
  },
  button: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    text: {

    }
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
        },
      },
    },
  },
}

export const appStyles = StyleSheet.create(flattenObject(_appStyles))

