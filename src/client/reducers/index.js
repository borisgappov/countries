import { combineReducers } from 'redux';
import { question1Reducer, question2Reducer, question3Reducer, question4Reducer } from '../features';

export default combineReducers({
  question1: question1Reducer,
  question2: question2Reducer,
  question3: question3Reducer,
  question4: question4Reducer,
});
