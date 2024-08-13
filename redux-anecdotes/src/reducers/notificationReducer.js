import { createSlice } from '@reduxjs/toolkit'

const initialState = ''
const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    createNotification(state, action) {
      console.log(
        'Noteifi Reducer = this is the action.payload (content of new anec)',
        action.payload
      )
      return action.payload
    }
  }
})

export const { createNotification } = notificationSlice.actions
export default notificationSlice.reducer
