export const styles = {
  container: {
    alignItems: 'stretch',
    padding: 20,
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