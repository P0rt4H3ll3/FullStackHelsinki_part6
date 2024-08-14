import React from 'react'
import ReactDOM from 'react-dom/client'

import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer'

const store = configureStore({ reducer })

const App = () => {
  const dispatchActionObject = (type) => {
    store.dispatch({ type: `${type}` })
  }

  return (
    <div>
      <button onClick={() => dispatchActionObject('GOOD')}>good</button>
      <button onClick={() => dispatchActionObject('OK')}>ok</button>
      <button onClick={() => dispatchActionObject('BAD')}>bad</button>
      <button onClick={() => dispatchActionObject('ZERO')}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
