import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'

export const history = createBrowserHistory()

export const store = configureStore({
  reducer: createRootReducer(history),
  middleware: [...getDefaultMiddleware(), routerMiddleware(history)]
});

render(
  <Provider store={store}>
    <App history={history}/>
  </Provider>,
  document.getElementById('root')
);
