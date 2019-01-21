import React, { Component } from 'react';

import './Job.css';

class Advertisement extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="unfollowopt jobRow container table table-hover pdlr0 adppnew">
        <a className="txt-color" rel="nofollow" href="https://bit.ly/2BwJe4e" target="_blank">
          <div className="col-md-11 wd73 hh container pdl0 pull-left">
            <div className="pull-left col-xs-12 col-lg-3new col-md-3new col-sm-3new pd0 hidden-sm">
              <img src="https://edgar.iimjobs.com/media/nativead/2018/12/18/2018-12-18-18-07-33-45580.png" alt="Aon_CHRBP" title="Aon_CHRBP" />
            </div>
            <div className="clearfix visible-xs"></div>
            <div className="pull-left col-lg-9new col-sm-9new pdlr0 mtb2 abc">
              <span className="pull-left ws">
                <b>
                Aon Hewitt - Certified HR Business Partner Professional
                </b>
              </span>
              <span className="visible-xs" alt="Know More" title="Know More">
                <b>Learn More</b> 
              </span>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-4 pdlr0 mtb2 hidden-sm pull-right">
            <span className="pull-left"><b>Learn More</b> </span>
          </div>
        </a>
      </div>
    );
  }
}

Advertisement.propTypes = {
};

export default Advertisement;