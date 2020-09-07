import { FETCH_JOB_FEEDS, FETCH_JOB_FEEDS_SUCCESS } from './action-types';

export const fetchJobFeeds = () => ({
  type: FETCH_JOB_FEEDS,
});

export const fetchJobFeedsSuccess = jobFeed => ({
  type: FETCH_JOB_FEEDS_SUCCESS,
  payload: {
    jobFeed,
  }
});
