import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createAnec } from '../requests'
import { useNotificationDispatch } from '../NotificationContext'

const AnecdoteForm = () => {
  const notificationDispatch = useNotificationDispatch()
  const queryClient = useQueryClient()

  const newAnecMutation = useMutation({
    mutationFn: createAnec,
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      if (anecdotes) {
        queryClient.setQueryData(['anecdotes'], [...anecdotes, newAnecdote])
      }
      notificationDispatch({
        type: 'SET_NOTIFICATION',
        payload: `Note with the Content '${newAnecdote.content}' was created`
      })
    }
  })
  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecMutation.mutate({ content, votes: 0 })
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
