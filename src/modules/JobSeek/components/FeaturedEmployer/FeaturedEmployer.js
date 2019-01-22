import React, { Component } from 'react';
import map from 'lodash/map';

import './FeaturedEmployer.css';
import { featuredEmployers } from '../../../../models/featuredEmployers';
import GreyDivider from '../../../../components/GreyDivider';
import DiversityEmployer from '../DiversityEmployer';

class FeaturedEmployer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <div className="overflow">
            <div className="clearfix"></div>
            <h4 className="txt15 strong pt0">Featured Employers</h4>
            <GreyDivider />
            <div className="clearfix"></div>
            {map(featuredEmployers, employer => (
              <div className="pull-left mb10 col-md-6 pd0">
                <span className="pull-left" rel="tooltip" title="" data-original-title={employer.name}>
                  <a rel="nofollow" target="_blank" title={employer.name}>
                    <img src={employer.url} width="16" height="16" />
                  </a>
                </span>
                <span className="pull-left txt13 wd34 ml10 ellip" alt={employer.name} rel="tooltip" title="" data-original-title={employer.name}>
                  <a rel="nofollow" title={employer.name} className="title-employer">
                    {employer.name}
                  </a>
                </span>
              </div>
            ))}
          </div>
          <div className="clearfix"></div>
          <GreyDivider />
          <DiversityEmployer />
          <GreyDivider />
        </div>
      </div>
    );
  }
}

FeaturedEmployer.propTypes = {
};

export default FeaturedEmployer;