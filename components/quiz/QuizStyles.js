export const styles = {
  container: {
    alignItems: 'center',
    paddingTop: 20,
  },
  header: {
    fontSize: 20,
  },
  review: {
    cardButton: {
      position: 'relative',
      padding: 5,
      background: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      width: 250,
      minHeight: 150,
      justifyItems: 'center',
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
      front: {

      },
      back: {
        backgroundColor:'#ddd',
        position:'absolute',
        top: 5,
      },
      rotated: (rotation)=>({
        transform: [
          { rotateY: rotation }
        ]
      }),
      question:{

      },
      answer: {

      },
    }
  },
}