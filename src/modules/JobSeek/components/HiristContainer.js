import React, { Component} from 'react'
import {connect} from 'react-redux'
import getJobFeeds from '../api.js'
import FormWrapper from '../../../components/Card'
import calculateDateInFormat from '../../../utils/calculateDate'
import Post from './datapost.js'
class HiristContainer extends Component{


    componentDidMount() {
        this.props.dispatch(getJobFeeds());
      }

  render(){

    return this.props.userData.feed.isJobLoading ?(
        <h2>Loading</h2>
    ):this.props.userData.feed.error ?(
        <h2>{this.props.userData.feed.error}</h2>
    ):(
            <div >
                {
                this.props.userData.feed&&this.props.userData.feed.jobFeed&&this.props.userData.feed.jobFeed.map(user => {
                   
                   return(
                   <Post
                    title={user.title}
                    companyName={user.companyData.companyName}
                    min={user.min}
                    max={user.max}
                    name={user.location[0].name}
                    createdTimeMs={user.createdTimeMs}
                    CreatedBy={user.CreatedBy}
                    click={this.clicked}
                   />
                   );
                })
                }
            </div>
    )
            }
}



const mapStateToProps=state=>{
    return{
       userData:state
    }
}
const mapDispatchToProps = dispatch => ({
    dispatch
  })




export default connect(
    mapStateToProps,
    mapDispatchToProps
) (HiristContainer)
