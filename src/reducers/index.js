import { combineReducers } from 'redux';
import feed from '../modules/JobSeek/reducer';

const reducers = {
  feed,
};

export default combineReducers(reducers);
