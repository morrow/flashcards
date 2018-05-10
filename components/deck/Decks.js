import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { styles } from './DeckStyles'

const data = [
  {
    name: 'Deck 1',
    key: 'a',
    questions: [
      {
        q: 'Name of this deck is?',
        a: 'Deck 1'
      },
    ]
  },
  {
    name: 'Deck 2',
    key: 'b',
    questions: [
      {
        q: 'Name of this deck is?',
        a: 'Deck 2',
      },
    ],
  },
]

const Decks =({navigation})=> {
  const renderItem = (item)=> (
    <TouchableOpacity
      key={item.item.name}
      onPress={(deck)=>{navigation.navigate('Deck', { ...item } ) }}
      style={styles.decks.button}
    >
      <Text style={styles.decks.button.text.name}>{ item.item.name }</Text>
      <Text style={styles.decks.button.text.questions}>{ item.item.questions.length } questions</Text>
    </TouchableOpacity>
  )
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  )
}

export default Decks