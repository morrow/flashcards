import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './cardStyles'

const Card = ({ data, style })=> {
  return (
    <View style={style.card}>
      <Text style={style.card.question}>{ data.question }</Text>
      <Text style={style.card.answer}>{ data.answer }</Text>
    </View>
  )
}

export default Card