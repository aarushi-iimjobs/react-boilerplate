import axios from 'axios';
import { fetchJobFeeds, fetchJobFeedsSuccess ,fetchJobFailed} from './actions';

const API_URL = 'https://stagenode.hirist.com/jobfeed/0/cat/12?pageNo=0'; 
export default function getJobFeeds() {
  return (dispatch) => {
    dispatch(fetchJobFeeds());
    axios.get(`${API_URL}`)
      .then((json) => {
        const datastrip=json.data.jobs;
        const per=datastrip.map(per=>{
          return {
            ...per,
            CreatedBy:"Rohit"
          }
        })

        dispatch(fetchJobFeedsSuccess(per));
        return json.data.jobs;
      }).catch((err) => {
        dispatch(fetchJobFailed(err.message));
      })
  }
}
