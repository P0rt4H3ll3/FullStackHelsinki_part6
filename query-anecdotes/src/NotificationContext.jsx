import { createContext, useContext, useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'

const notificationReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.payload
    case 'REMOVE_NOTIFICATION':
      return ''
    default:
      return state
  }
}

const NotificationContext = createContext()

export const NotificationContextProvider = ({ children }) => {
  const [notification, notificationDispatch] = useReducer(
    notificationReducer,
    ''
  )
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        notificationDispatch({ type: 'REMOVE_NOTIFICATION' })
      }, 5000)
    }
  }, [notification])

  return (
    <NotificationContext.Provider value={[notification, notificationDispatch]}>
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotificationMessage = () => {
  // const [notification, notificationDispatch] = useContext(NotificationContext)
  const messageAndDispatch = useContext(NotificationContext)
  return messageAndDispatch[0]
  // return notification
}

export const useNotificationDispatch = () => {
  //const [notification, notificationDispatch] = useContext(NotificationContext)
  const messageAndDispatch = useContext(NotificationContext)
  return messageAndDispatch[1]
  //return notificationDispatch
}

NotificationContextProvider.propTypes = {
  children: PropTypes.node
}

export default NotificationContext
