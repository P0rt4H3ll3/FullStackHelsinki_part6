import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(({ notifications }) => {
    if (notifications === '') {
      return null
    }
    return notifications
  })

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return notification && <div style={style}>{notification}</div>
}

export default Notification
