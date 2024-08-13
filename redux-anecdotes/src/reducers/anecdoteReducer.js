import { createSlice } from '@reduxjs/toolkit'

const anecSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    increaseVote: (state, action) => {
      const id = action.payload
      const aToChange = state.find((a) => a.id === id)
      const newAnec = { ...aToChange, votes: aToChange.votes + 1 }
      return state.map((a) => (a.id !== id ? a : newAnec))
    },
    createAnecdote: (state, action) => {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    }
  }
})

export const { increaseVote, createAnecdote, setAnecdotes, appendAnecdote } =
  anecSlice.actions
export default anecSlice.reducer
