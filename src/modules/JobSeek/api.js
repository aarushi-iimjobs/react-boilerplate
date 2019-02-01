import axios from 'axios';
import { fetchJobFeeds, fetchJobFeedsSuccess } from './actions';

// const API_URL = 'http://angel.iimjobs.com/api7/catelist/13';
const API_URL = 'http://13.233.191.19:3001/jobfeed/228821/jobs';

export default function getJobFeeds(pageNo) {
  return (dispatch) => {
    dispatch(fetchJobFeeds());
    axios.get(`${API_URL}?pageNo=${pageNo}`)
      .then((json) => {
        dispatch(fetchJobFeedsSuccess(json.data));
        return json.data;
      }).catch((err) => {
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
