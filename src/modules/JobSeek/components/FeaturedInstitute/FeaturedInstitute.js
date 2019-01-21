import React, { Component } from 'react';
import map from 'lodash/map';

import '../Learning/Learning.css';
import { featuredInstitutes } from '../../../../models/featuredInstitutes';
import GreyDivider from '../../../../components/GreyDivider';

class FeaturedInstitute extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="txt15">
          <h4 className="txt15 mt0 strong pt0">Featured Institute</h4>
        </div>
        <GreyDivider />
        {map(featuredInstitutes, featuredInstitute => (
          <div>
            <a className="a-tag" title={featuredInstitute.name}>
              <div className="row">
                <div className="col-md-12 pdrl">
                  <img className="wd-full" src={featuredInstitute.url} alt={featuredInstitute.name}/>
                </div>
              </div>
            </a>
            <GreyDivider />
          </div>
        ))}
      </div>
    );
  }
}

FeaturedInstitute.propTypes = {
};

export default FeaturedInstitute;