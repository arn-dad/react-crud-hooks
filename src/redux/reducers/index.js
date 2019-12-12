import { combineReducers } from 'redux';
import todosReducer from './todosReducer';
import eventsReducer from './eventsReducer';

export default combineReducers({
  todos  : todosReducer,
  events : eventsReducer
})