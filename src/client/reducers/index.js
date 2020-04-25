import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { question1Reducer } from './question1Slice'
import { question2Reducer } from './question2Slice'
import { question3Reducer } from './question3Slice'
import { commonReducer } from './commonSlice'

export const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    common: commonReducer,
    question1: question1Reducer,
    question2: question2Reducer,
    question3: question3Reducer,
  })
