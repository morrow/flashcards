import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './cardStyles'

const Card = ({ data, style })=> {
  return (
    <View style={style}>
      <Text style={style.question}>{ data.question }</Text>
      <View style={style.separator}></View>
      <Text style={style.answer}>{ data.answer }</Text>
    </View>
  )
}

export default Card