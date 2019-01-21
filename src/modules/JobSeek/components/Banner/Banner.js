import React, { Component } from 'react';

import './Banner.css';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.removeBanner = this.removeBanner.bind(this);
    this.state = {
      showBanner: true,
    }
  }

  removeBanner() {
    this.setState({ showBanner: false })
  }

  render() {
    if (this.state.showBanner) 
      return (
        <div className="pull-left bannerspace hidden-sm">
          <div className="new_ad">
            <div id="div_TL_0section">
              <a rel="nofollow" target="_blank" href="https://bit.ly/2Fo8vRZ" title="">
                <img src="https://static.iimjobs.com/resources/topbanner/iimjobs/TL_TM_EPSMSM_10Jan.png" alt="" className="img-wd" />
              </a>
            </div>
          </div>
          <div className="clearfix"></div>
          <a href="javascript:void(0);" className="close" onClick={this.removeBanner}><img src="https://static.iimjobs.com/resources/img/close.png" /></a>
        </div>
      )
    else 
      return('')
  }
}

Banner.propTypes = {
};

export default Banner;