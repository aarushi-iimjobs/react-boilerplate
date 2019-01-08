import { REMOVE_JOB } from './action-types';

export const removeJob = id => ({
  type: REMOVE_JOB,
  id,
});
