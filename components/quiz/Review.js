import React from 'react'
import Card from '../card/Card'
import { View, Text, TouchableOpacity, FlatList, Animated, Easing } from 'react-native'
import { styles } from './quizStyles'
import { connect } from 'react-redux'

const Review = ({ navigation, decks, cards, flipCard })=> {
  const params = navigation.state.params
  const deckCards = decks.byId[params.id].cards.map(c=>cards.byId[c])
  const renderItem = (item)=> {
    item.rotation = 0
    item.animatedRotation = new Animated.Value(0)
    item.animatedRotation.addListener(({ value })=>{
      item.rotation = value
    })
    item.frontInterpolation = item.animatedRotation.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg']
    })
    item.backInterpolation = item.animatedRotation.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    })
    const flip = ()=> {
      let endValue = item.rotation >= 90 ? 0 : 180
      Animated.spring(item.animatedRotation,
        {
          toValue: endValue,
          friction: 10,
          spring: 8,
          easing: Easing.linear
        }
      ).start()
    }
    return (
      <TouchableOpacity
        onPress={()=>{flip()}}
        style={styles.review.cardButton}>
        <Animated.View style={[styles.review.card, styles.review.card.rotated(item.frontInterpolation)]}>
          <Text style={styles.review.card.text}>{item.item.question}</Text>
        </Animated.View>
        <Animated.View style={[styles.review.card, styles.review.card.back, styles.review.card.rotated(item.backInterpolation)]}>
          <Text style={styles.review.card.text}>{item.item.answer}</Text>
        </Animated.View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.review.header}>Review</Text>
      <FlatList data={deckCards} renderItem={renderItem} />
    </View>
  )
}

const mapStateToProps = (state)=> ({
  decks: state.deck,
  cards: state.card
})

const mapDispatchToProps = (dispatch)=>({
  flipCard:(card)=>{
    console.log(this)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Review)