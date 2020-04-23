import { combineReducers } from 'redux';
import question1Reducer from '../features/question1/question1Slice';
import question2Reducer from '../features/question2/question2Slice';

export default combineReducers({
  question1: question1Reducer,
  question2: question2Reducer,
});
