import AnecdoteList from './components/AnecdoteList'
import AnacdoteForm from './components/AnecdoteForm'
import Filter from './components/Filter'
import Notification from './components/Notification'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnacdoteForm />
    </div>
  )
}

export default App
