import React, { Component } from 'react';

import './ShowProfile.css';

class ShowProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="newprofwidgetsectli">
        <li>
          <div className="newprofwidgetsectloptli">
            <p className="same-line">
              <a href="https://www.iimjobs.com/registration/registration.php?profiletype=1" className="gry_txt">Personal Details</a>
              <span><i>
                <img src="https://static.iimjobs.com/resources/img/tickigrey.png" />
              </i></span>
            </p>
          </div>
        </li>
        <li>
          <div className="newprofwidgetsectloptli">
            <p className="same-line">
              <a href="https://www.iimjobs.com/registration/registration.php?profiletype=1&amp;p" className="gry_txt">Professional Details</a>
              <span><i>
                <img src="https://static.iimjobs.com/resources/img/tickigrey.png" />
              </i></span> 
            </p>
          </div>
        </li>
        <li>
          <div className="newprofwidgetsectloptli">
            <p className="same-line">
              <a href="https://www.iimjobs.com/registration/registration.php?profiletype=1&amp;e" className="gry_txt">Education Details</a>
              <span><i>
                <img src="https://static.iimjobs.com/resources/img/tickigrey.png" />
              </i></span>
            </p>
          </div>
        </li>
        <li>
          <div className="newprofwidgetsectloptli">
            <p className="same-line">
              <a href="https://www.iimjobs.com/registration/registration.php?profiletype=1&amp;u" className="gry_txt">Resume Attached</a>
              <span><i>
                <img src="https://static.iimjobs.com/resources/img/tickigrey.png" />
              </i></span>
            </p>
          </div>
        </li>
        <li>
          <div className="newprofwidgetsectloptli">
            <p className="same-line">
              <a href="https://www.iimjobs.com/meta/" className="gry_txt">Follow Keywords</a>
              <span><i>
                <img src="https://static.iimjobs.com/resources/img/tickigrey.png" />
              </i></span>
            </p>
          </div>
        </li>
        <li>
          <div className="newprofwidgetsectloptli">
            <p className="same-line">
              <a href="https://www.iimjobs.com/registration/registration.php?profiletype=1&amp;r" className="gry_txt">Recommendations</a>
              <span><i><img src="https://static.iimjobs.com/resources/img/tickigrey.png" />
              </i></span>
            </p>
          </div>
        </li>
        <li>
          <div className="newprofwidgetsectloptli">
            <p className="same-line">
              <a href="https://www.iimjobs.com/registration/registration.php?profiletype=1&amp;u" className="gry_txt">Profile Picture</a>
              <span><i>
                <img src="https://static.iimjobs.com/resources/img/tickigrey.png" />
              </i></span>
            </p>
          </div>
        </li>
        <li>
          <div className="newprofwidgetsectloptli">
            <p className="same-line">
              <a href="https://www.iimjobs.com/myprofile" className="gry_txt">Linkedin Connection</a>
              <span><i>
                <img src="https://static.iimjobs.com/resources/img/tickigrey.png" />
              </i></span>
            </p>
          </div>
        </li>
        <li>
          <div className="newprofwidgetsectloptli">
            <p className="same-line">
              <a href="https://www.iimjobs.com/myprofile" className="gry_txt">Facebook Connection</a>
              <span><i>
                <img src="https://static.iimjobs.com/resources/img/tickigrey.png" />
              </i></span>
            </p>
          </div>
        </li>
        <li>
          <div className="newprofwidgetsectloptli">
            <p className="same-line">
              <a href="https://www.iimjobs.com/myprofile" className="gry_txt">Twitter Connection</a>
              <span><i>
                <img src="https://static.iimjobs.com/resources/img/tickigrey.png" />
              </i></span>
            </p>
          </div>
        </li>
        <li>
          <div className="newprofwidgetsectloptli">
            <p className="same-line">
              <a href="https://www.iimjobs.com/verification" target="_blank" className="gry_txt">Email Verification</a>
              <span className="optlipending">Pending</span>
            </p>
          </div>
        </li>
        <li>
          <div className="newprofwidgetsectloptli">
            <p className="same-line">
              <a href="https://www.iimjobs.com/verification" target="_blank" className="gry_txt">Phone Number Verification</a>
              <span className="optlipending">Pending</span>
            </p>
          </div>
        </li>
      </ul>
    );
  }
}

ShowProfile.propTypes = {
};

export default ShowProfile;