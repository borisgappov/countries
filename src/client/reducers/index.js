import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { question1Reducer, question2Reducer, question3Reducer } from '../features'

export const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    question1: question1Reducer,
    question2: question2Reducer,
    question3: question3Reducer,
  })
