export const styles = {
  container: {
    alignItems: 'center',
    paddingTop: 20,
  },
  decks: {
    button: {
      padding:5,
      paddingLeft: 15,
      paddingRight: 15,
      margin: 5,
      borderRadius:5,
      backgroundColor: '#ffffff',
      text: {
        name: {
          fontSize:30,
        },
        questions: {
          fontSize:25,
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
    questions: {
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
        padding: 10,
        backgroundColor: '#FF0000',
        margin:10,
        borderRadius:5,
        alignItems: 'center',
      }
    },
    deckButtonText: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'white',
    },
  }
}