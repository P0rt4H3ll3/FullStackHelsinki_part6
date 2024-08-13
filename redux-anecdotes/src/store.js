import { configureStore } from '@reduxjs/toolkit'
import anecReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'

const store = configureStore({
  reducer: {
    anecdotes: anecReducer,
    filter: filterReducer
  }
})

export default store
