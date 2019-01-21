import { REMOVE_JOB, REMOVE_BANNER, FETCH_JOB_FEEDS } from './action-types';

export const removeJob = id => ({
  type: REMOVE_JOB,
  id,
});

export const fetchJobFeeds = (jobFeed) => ({
  type: FETCH_JOB_FEEDS,
  payload: {
    jobFeed
  }
});
