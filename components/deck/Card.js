import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './deckStyles'

const Card = ({ data, style })=> {
  return (
    <View style={style.card}>
      <Text style={style.card.q}>{ data.q }</Text>
      <Text style={style.card.a}>{ data.a }</Text>
    </View>
  )
}

export default Card