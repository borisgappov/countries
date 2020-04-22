import { combineReducers } from 'redux';
import question1Reducer from '../features/question1/question1Slice';

export default combineReducers({
  question1: question1Reducer,
});
