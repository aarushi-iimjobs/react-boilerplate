import filter from 'lodash/filter';
import { REMOVE_JOB } from './actions/action-types';
import { jobFeedData } from '../../models/jobFeed';

const initialState = {
  jobFeed: jobFeedData,
};

export default (state = initialState, action) => {
  switch(action.type) {
    case REMOVE_JOB:
      return {
        ...state,
        jobFeed: filter(state.jobFeed, ({ id }) => id !== action.id),
      };

    default:
      return state;
  }
}