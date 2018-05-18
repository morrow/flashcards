import React from 'react'
import Card from '../card/Card'
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native'
import { styles } from './cardStyles'

const FlippableCard = ({ front, back })=> {
  let card = {
    rotation: 0,
    animatedRotation: new Animated.Value(0),
  }
  card.animatedRotation.addListener(({ value })=>{
    card.rotation = value
  })
  card.frontInterpolation = card.animatedRotation.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg']
  })
  card.backInterpolation = card.animatedRotation.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg']
  })
  const flip = (card)=> {
    let endValue = card.rotation >= 90 ? 0 : 180
    Animated.spring(card.animatedRotation,
      {
        toValue: endValue,
        friction: 10,
        spring: 8,
        easing: Easing.linear
      }
    ).start()
  }
  const getRotatedStyle = (rotation)=>({
    transform: [
      { rotateY: rotation }
    ]
  })
  return (
    <TouchableOpacity
      onPress={()=>{flip(card)}}
      style={styles['flippable.cardButton']}>
      <Animated.View style={[styles['flippable.card'], getRotatedStyle(card.frontInterpolation)]}>
        <Text style={styles['flippable.card.text']}>{front}</Text>
      </Animated.View>
      <Animated.View style={[styles['flippable.card'], styles['flippable.card.back'], getRotatedStyle(card.backInterpolation)]}>
        <Text style={styles['flippable.card.answerHeader']}>Answer:</Text>
        <Text style={[styles['flippable.card.text'], styles['flippabler.card.answer']]}>{back}</Text>
      </Animated.View>
    </TouchableOpacity>
  )
}


export default FlippableCard