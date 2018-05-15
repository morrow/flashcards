import React from 'react'
import Card from '../card/Card'
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native'
import { styles } from './cardStyles'

const FlippableCard = ({ front, back })=> {
  this.rotation = 0
  this.animatedRotation = new Animated.Value(0)
  this.animatedRotation.addListener(({ value })=>{
    this.rotation = value
  })
  this.frontInterpolation = this.animatedRotation.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg']
  })
  this.backInterpolation = this.animatedRotation.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg']
  })
  const flip = ()=> {
    let endValue = this.rotation >= 90 ? 0 : 180
    Animated.spring(this.animatedRotation,
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
      onPress={()=>{flip()}}
      style={styles['flippable.cardButton']}>
      <Animated.View style={[styles['flippable.card'], getRotatedStyle(this.frontInterpolation)]}>
        <Text style={styles['flippable.card.text']}>{front}</Text>
      </Animated.View>
      <Animated.View style={[styles['flippable.card'], styles['flippable.card.back'], getRotatedStyle(this.backInterpolation)]}>
        <Text style={styles['flippable.card.answerHeader']}>Answer:</Text>
        <Text style={[styles['flippable.card.text'], styles['flippabler.card.answer']]}>{back}</Text>
      </Animated.View>
    </TouchableOpacity>
  )
}


export default FlippableCard