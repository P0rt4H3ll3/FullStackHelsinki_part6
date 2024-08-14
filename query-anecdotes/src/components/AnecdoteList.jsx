import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { updateAnec } from '../requests'
import PropTypes from 'prop-types'
import { useNotificationDispatch } from '../NotificationContext'

const AnecdoteList = ({ anecdotes }) => {
  //
  const notificationDispatch = useNotificationDispatch()
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
      notificationDispatch({
        type: 'SET_NOTIFICATION',
        payload: `you voted '${updateResDataObject.content}'`
      })
    }
  })

  const handleVote = (anecdote) => {
    const toUpdateAnec = { ...anecdote, votes: anecdote.votes + 1 }
    updateAnecMutation.mutate(toUpdateAnec)
  }
  return (
    <div>
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

AnecdoteList.propTypes = {
  anecdotes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired
    })
  ).isRequired
}

export default AnecdoteList
