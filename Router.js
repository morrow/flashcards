import { createStackNavigator } from 'react-navigation'
import Decks from './components/deck/Decks'
import Deck from './components/deck/Deck'
import NewDeck from './components/deck/NewDeck'
import ManageDeck from './components/deck/ManageDeck'
import Quiz from './components/quiz/Quiz'
import Review from './components/quiz/Review'
import ManageCards from './components/card/ManageCards'
import ManageCard from './components/card/ManageCard'
import NewCard from './components/card/NewCard'

const Router = createStackNavigator({
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
  NewDeck: {
    screen: NewDeck,
    navigationOptions: ({ navigation }) => ({
      title: 'New Deck',
    }),
  },
  ManageDeck: {
    screen: ManageDeck,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name} - Manage Deck`,
    }),
  },
  ManageCards: {
    screen: ManageCards,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name} - Manage Cards`,
    }),
  },
  ManageCard: {
    screen: ManageCard,
    navigationOptions: ({ navigation }) => ({
      title: 'Manage Card',
    }),
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: ({ navigation }) => ({
      title: 'New Card',
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