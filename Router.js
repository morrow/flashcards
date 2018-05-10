import { StackNavigator } from 'react-navigation'
import Decks from './components/deck/Decks'
import Deck from './components/deck/Deck'
import Quiz from './components/quiz/Quiz'
import Review from './components/quiz/Review'

const Router = StackNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: ({ navigation }) => ({
      title: 'Decks',
    }),
  },
  Deck: {
    screen: Deck,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.item.name,
    }),
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name} Quiz`,
      gesturesEnabled: false,
    }),
  },
  Review: {
    screen: Review,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name} Review`,
      gesturesEnabled: false,
    }),
  },
})

export default Router