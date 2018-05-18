import { createStackNavigator } from 'react-navigation'
import Decks from '../deck/Decks'
import Deck from '../deck/Deck'
import NewDeck from '../deck/NewDeck'
import ManageDeck from '../deck/ManageDeck'
import Quiz from '../quiz/Quiz'
import QuizItem from '../quiz/QuizItem'
import QuizSummary from '../quiz/QuizSummary'
import Review from '../quiz/Review'
import ManageCards from '../card/ManageCards'
import ManageCard from '../card/ManageCard'
import NewCard from '../card/NewCard'

const Router = createStackNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: ({ navigation }) => ({
      title: 'Flashcards',
    }),
  },
  Deck: {
    screen: Deck,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.name,
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
  QuizItem: {
    screen: QuizItem,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title,
      gesturesEnabled: false,
    })
  },
  QuizSummary: {
    screen: QuizSummary,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title,
      gesturesEnabled: false,
    })
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