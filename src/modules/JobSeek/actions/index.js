import { REMOVE_JOB, FETCH_JOB_FEEDS, FETCH_JOB_FEEDS_SUCCESS } from './action-types';

export const removeJob = id => ({
  type: REMOVE_JOB,
  id,
});

export const fetchJobFeeds = () => ({
  type: FETCH_JOB_FEEDS,
});

export const fetchJobFeedsSuccess = jobFeed => ({
  type: FETCH_JOB_FEEDS_SUCCESS,
  payload: {
    jobFeed,
  }
});
