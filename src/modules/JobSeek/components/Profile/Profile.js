import React, { Component } from 'react';

import './Profile.css';
import GreyDivider from '../../../../components/GreyDivider';

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <ul className={"profile-list about dropdown-menu"}>
        <li>
          <div className="profwidgetsect">
            <span className="posrel">
              <img className="img" src="https://edgar.iimjobs.com/media/userpics/2018/09/07/2018-09-07-14-56-22-456800.jpg" />
            </span>
            <h3 className="name">Aarushi Goyal
              <span className="posrel email">
                aarushi@iimjobs.com
                <em className="verifyp">Verify Your Contact Details</em>
              </span>
              <span className="progress myprogress myprogresswhite somespan">
                <span className="progress-bar txt12 txt-color" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%
                </span>
              </span>
            </h3>
          </div> 
        </li>
        <li className="greenbg">
          <a>Edit Profile</a>
          <a>My Profile</a>
          <a>Personalize Jobfeed</a>
          <a>My Jobfeed</a>
          <a>My Settings</a>
          <a>Applied Jobs</a>
          <a>My Interviews</a>
          <a>Block Companies</a>
          <a>Saved Jobs</a>
          <a>Change Password</a>
          <a>My Chat</a>
          <a>Learning Center</a>
          <a>Removed Jobs / Recruiters</a>
          <a>Follow Up (0)</a>
          <a>Recruiter View</a>
          <a>Request Recommendation</a>
          <a>Basic Account <br/><span>(Upgrade)</span></a>
        </li>
        <li className="logoutstrip">
          <div className="logout-btn">
            <a className="green-btn">Logout</a>
          </div>
        </li>
        <li className="col-left pd0">
          <ul>
            <li className="xair"><span className="txt12 capitalize">Industry Reports</span></li>
            <li className="xair"><a>Banking</a></li>
            <li className="xair"><a>FMCG</a></li>
            <li className="xair"><a>IT & ITES</a></li>
            <li className="xair"><a>Retail</a></li>
            <li className="xair"><a>Healthcare</a></li>
            <li className="xair"><a>Automobiles</a></li>
            <li className="xair"><a>Manufacturing</a></li>
            <li className="xair"><a>Pharmaceutical</a></li>
          </ul>
        </li>
        <li className="pd0 col-right col-list">
          <ul className="pd0">
            <li><span className="white_txt capitalize">About</span></li>
            <li><a>What iimjobs.com is not?</a></li>
            <li><a>How Recruiters look at applications</a></li>
            <li><a>The Pro-Membership Plan FAQ</a></li>
            <li><a>Breaking a Few Myths about the Pro Membership Plan</a></li>
            <li><a>Why Jobseekers Don't Get the Call They Think They Deserve</a></li>
            <li><a>Frequently Asked Questions</a></li>
            <li><a>Site Map</a></li>
            <li><a>All Things Talent- Exclusive HR Community</a></li>
            <li><a>Contact Us</a></li>
          </ul>
        </li>
        <li className="mb10">
          <GreyDivider />
          <div className="pull-left wd34">
            <a href="http://hirist.com">hirist.com - IT Jobs</a>
          </div>
          <div className="clearfix"></div>
        </li>
      </ul>
    );
  }
}

Profile.propTypes = {
};

export default Profile;