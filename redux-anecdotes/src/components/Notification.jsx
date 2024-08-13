import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(({ notifications }) => {
    if (notifications === '') {
      return null
    }
    return notifications
  })
  console.log(
    'this is in Component Notification, the useSelector notification:',
    notification
  )
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return notification && <div style={style}>{notification}</div>
}

export default Notification
