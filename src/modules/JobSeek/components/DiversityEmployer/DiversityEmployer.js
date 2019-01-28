import React, { Component } from 'react';
import map from 'lodash/map';

import './DiversityEmployer.css';
import { diversityEmployers } from '../../../../models/diversityEmployers';

class DiversityEmployer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="featured-employee-list">
        <div className="clearfix" />
        <h4 className="txt15 mt10 strong diversity">Featured Employers for Diversity</h4>
        <div className="clearfix" />
        {map(diversityEmployers, employer => (
          <div className="pull-left mb10 col-md-6 pd0">
            <span className="pull-left" rel="tooltip" title="" data-original-title={employer.name}>
              <a rel="nofollow" title={employer.name}>
                <img src={employer.url} width="16" height="16" alt=""/>
              </a>
            </span>
            <span className="pull-left wd34 txt13 ml10 ellip" alt={employer.name} rel="tooltip" title="" data-original-title={employer.name}>
              <a rel="nofollow" title={employer.name} className="title-employer">
                {employer.name}
              </a>
            </span>
          </div>
        ))}
        <div className="clearfix" />
      </div>
    );
  }
}

DiversityEmployer.propTypes = {
};

export default DiversityEmployer;
