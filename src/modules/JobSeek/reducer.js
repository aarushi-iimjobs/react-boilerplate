import filter from 'lodash/filter';
import { REMOVE_JOB, FETCH_JOB_FEEDS, FETCH_JOB_FEEDS_SUCCESS } from './actions/action-types';

const initialState = {
  jobFeed: '',
  isJobLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_JOB:
      return {
        ...state,
        jobFeed: filter(state.jobFeed, ({ id }) => id !== action.id),
      };

    case FETCH_JOB_FEEDS:
      return {
        ...state,
        isJobLoading: true,
      }

    case FETCH_JOB_FEEDS_SUCCESS:
      return {
        ...state,
        isJobLoading: false,
        jobFeed: [...state.jobFeed, ...action.payload.jobFeed],
      }

    default:
      return state;
  }
}
