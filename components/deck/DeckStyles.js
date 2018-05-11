export const styles = {
  container: {
    alignItems: 'center',
    paddingTop: 20,
  },
  decks: {
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
}