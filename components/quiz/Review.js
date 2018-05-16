import React from 'react'
import Card from '../card/Card'
import { ScrollView, View, Text, TouchableOpacity, FlatList, Animated, Easing } from 'react-native'
import { quizStyles, _quizStyles } from './quizStyles'
import { appStyles } from '../app/appStyles'
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
    const getRotatedStyle = (rotation)=>({
      transform: [
        { rotateY: rotation }
      ]
    })
    return (
      <TouchableOpacity
        onPress={()=>{flip()}}
        style={quizStyles['review.cardButton']}>
        <Animated.View style={[quizStyles['review.card'], getRotatedStyle(item.frontInterpolation)]}>
          <Text style={quizStyles['review.card.header']}>Question:</Text>
          <Text style={quizStyles['review.card.text']}>{item.item.question}</Text>
        </Animated.View>
        <Animated.View style={[quizStyles['review.card'], quizStyles['review.card.back'], getRotatedStyle(item.backInterpolation)]}>
          <Text style={quizStyles['review.card.header']}>Answer:</Text>
          <Text style={[quizStyles['review.card.text'], quizStyles['review.card.answer']]}>{item.item.answer}</Text>
        </Animated.View>
      </TouchableOpacity>
    )
  }
  return (
    <ScrollView contentContainerStyle={appStyles.container}>
      <Text style={[appStyles['header'], quizStyles['review.header']]}>{ params.name } Review</Text>
      <FlatList style={quizStyles['review.list']} data={deckCards} renderItem={renderItem} />
    </ScrollView>
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