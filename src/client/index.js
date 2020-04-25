import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { App } from './App'
import { Error } from './components'
import { createRootReducer } from './reducers'

export const history = createBrowserHistory()

export const store = configureStore({
  reducer: createRootReducer(history),
  middleware: [...getDefaultMiddleware(), routerMiddleware(history)],
})

render(
  <Provider store={store}>
    <App history={history} />
    <Error />
  </Provider>,
  document.getElementById('root'),
)
