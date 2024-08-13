import { createSlice } from '@reduxjs/toolkit'
import anecService from '../services/anecdotes'

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

    setAnecdotes(state, action) {
      return action.payload
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    }
  }
})

export const { increaseVote, setAnecdotes, appendAnecdote } = anecSlice.actions

export const initializeAnec = () => {
  return async (dispatch) => {
    const anecdotes = await anecService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnec = await anecService.createNew(content)
    dispatch(appendAnecdote(newAnec))
  }
}

export const updateAnecdote = (anecdote) => {
  return async (dispatch) => {
    const updateAnec = await anecService.update(anecdote)
    const allAnec = await anecService.getAll()
    const updatedSetAll = allAnec.map((a) =>
      a.id !== anecdote.id ? a : updateAnec
    )
    dispatch(setAnecdotes(updatedSetAll))
  }
}
export default anecSlice.reducer
