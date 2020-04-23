import { combineReducers } from 'redux';
import question1Reducer from '../features/question1/question1Slice';
import question2Reducer from '../features/question2/question2Slice';
import question3Reducer from '../features/question3/question3Slice';

export default combineReducers({
  question1: question1Reducer,
  question2: question2Reducer,
  question3: question3Reducer,
});
