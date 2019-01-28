import React, { Component } from 'react';

import './Notification.css';

class Notification extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="iimjobbseekernotifboxmain" id="notifybellboxid">
        <span className="arrownotifytop"></span>
        <div className="notifboxmainboxheader">Notification</div>
        <ul className="notifboxmainboxlist">
          <li className="active pull-left">
            <a href="/verification?ref=notifi" status="1" notifi_id="36439204" className="notifi-links">
              <div className="notifboxmainboxinner notifyverifyemailbgfull">
                <h4>Candidates with a verified email id have a higher chance of getting contacted by the recruiter. Click here to verify your email id.</h4>
              </div>
              <div className="notifyjobstime">19hr</div>
            </a>
          </li>
          <li className="active pull-left">
            <a href="/verification?ref=notifi" status="1" token="HLOr6n4PSNr7tihbEbkdBGSKcbqa3CGk9LA9o_PLUS_ugdeDBGk649KIJALLBzjK3WR6_SLASH_kVVun7ZWMf7zfiaKFFC_SLASH_Bw_EQUALS__EQUALS_" notifi_id="35426567" className="notifi-links">
              <div className="notifboxmainboxinner notifyverifyphonebgfull">
                <h4>Candidates with a verified phone number have a 50% higher chance of getting contacted by the recruiter. Click here to verify your phone number.</h4>
              </div>
              <div className="notifyjobstime">1months</div>
            </a>
          </li>
        </ul>
        <div className="notifiloadtext">
          <img src="https://static.iimjobs.com/resources/images/gif-load.gif" alt="" />
        </div>
        <div className="notifboxmainboxheader notifboxmainboxheadertopbor text-center">
          <a href="/allnotification" className="seeallink" target="_blank"><strong>See All</strong></a>
        </div>
      </div>
    );
  }
}

Notification.propTypes = {
};

export default Notification;
