import axios from 'axios';
import { fetchJobFeeds } from './actions';
import { jobFeedData } from '../../models/jobFeed';
const API_URL = 'http://angel.iimjobs.com/api7/catelist/13';

export function getJobFeeds() {
  return function(dispatch) {
    axios.get(`${API_URL}`)
    .then(json => {
      dispatch(fetchJobFeeds(json.data.jobs));
      return json.data.jobs;
    }).catch(err => {
      console.log(err, '=======error====');
    })
  }
}

// export function getJobFeeds() {
//   return function(dispatch) {
//       dispatch(fetchJobFeeds(jobFeedData));
//       return jobFeedData;
//     }
// }