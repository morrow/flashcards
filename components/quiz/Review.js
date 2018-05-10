import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './QuizStyles'

const Review = ({ navigation })=> {
  const item = navigation.state.params
  return (
    <View style={styles.container}>
      <Text>Review</Text>
      <Text>{ JSON.stringify(item.questions, null, 2) }</Text>
    </View>
  )
}

export default Review