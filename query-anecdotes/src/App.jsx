import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAnecdotes, updateAnec } from './requests'

const App = () => {
  const queryClient = useQueryClient()
  const updateAnecMutation = useMutation({
    mutationFn: updateAnec,
    onSuccess: (updateResDataObject) => {
      //Updates from Mutation Responses
      // Instead of refetching any queries for that item and wasting a network call for data we already have, we can take advantage of the object returned by the mutation function and update the existing query with the new data immediately using the Query Client's setQueryData
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(
        ['anecdotes'],
        anecdotes.map((a) =>
          a.id !== updateResDataObject.id ? a : updateResDataObject
        )
      )
    }
  })
  const handleVote = (anecdote) => {
    const toUpdateAnec = { ...anecdote, votes: anecdote.votes + 1 }
    updateAnecMutation.mutate(toUpdateAnec)
  }

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes
    //refetchOnWindowFocus: false
  })

  if (result.isLoading) {
    return <div>loading data...</div>
  }

  const anecdotes = result.data

  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification />
      <AnecdoteForm />

      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
