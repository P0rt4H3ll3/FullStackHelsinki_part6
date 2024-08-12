import AnecdoteList from './components/AnecdoteList'
import AnacdoteForm from './components/AnecdoteForm'
import Filter from './components/Filter'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteList />
      <AnacdoteForm />
    </div>
  )
}

export default App
