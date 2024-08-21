/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createSlice } from '@reduxjs/toolkit'
const initialState = ''
const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    createNotification(state, action) {
      return action.payload
    },
    removeNotification(state, action) {
      return initialState
    }
  }
})

export const { createNotification, removeNotification } =
  notificationSlice.actions

export const setNotification = (notification, time) => {
  //Thunk
  //Instead of returning an action object, setNotification returns a function that takes dispatch as an argument. This makes it a thunk. Redux Thunk middleware allows this pattern, enabling you to perform side effects (like delayed dispatches) within your action creators.
  //
  return async (dispatch) => {
    dispatch(createNotification(notification))
    setTimeout(() => {
      dispatch(removeNotification())
    }, time * 1000)
  }
}

export default notificationSlice.reducer
