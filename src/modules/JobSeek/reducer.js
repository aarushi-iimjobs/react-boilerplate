import filter from 'lodash/filter';
import { REMOVE_JOB, FETCH_JOB_FEEDS } from './actions/action-types';

const initialState = {
  jobFeed: ''
};

export default (state = initialState, action) => {
  switch(action.type) {
    case REMOVE_JOB:
      return {
        ...state,
        jobFeed: filter(state.jobFeed, ({ id }) => id !== action.id),
      };
    
    case FETCH_JOB_FEEDS:
      return {
        ...state,
        jobFeed: action.payload.jobFeed
      }

    default:
      return state;
  }
}