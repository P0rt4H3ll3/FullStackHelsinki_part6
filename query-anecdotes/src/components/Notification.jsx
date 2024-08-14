import PropTypes from 'prop-types'
import { useContext } from 'react'
import { useNotificationMessage } from '../NotificationContext'

const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  const notification = useNotificationMessage()
  if (!notification) return null

  return <div style={style}>{notification}</div>
}

Notification.prototype = {
  notification: PropTypes.string
}

export default Notification
