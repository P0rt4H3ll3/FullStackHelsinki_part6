import { createSlice } from '@reduxjs/toolkit'

const initialState = ''
const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    setNotification(state, action) {
      return action.payload
    },
    removeNotification(state, action) {
      return initialState
    }
  }
})

export const { setNotification, removeNotification } = notificationSlice.actions

export const createNotification = (notification) => {
  //Thunk
  //Instead of returning an action object, createNotification returns a function that takes dispatch as an argument. This makes it a thunk. Redux Thunk middleware allows this pattern, enabling you to perform side effects (like delayed dispatches) within your action creators.
  //
  return async (dispatch) => {
    dispatch(setNotification(notification))
    setTimeout(() => {
      dispatch(removeNotification())
    }, 5000)
  }
}

export default notificationSlice.reducer
