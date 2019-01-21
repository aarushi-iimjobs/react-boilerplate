import React, { Component } from 'react';
import map from 'lodash/map';

import '../Learning/Learning.css';
import { learngrow } from '../../../../models/learngrow';
import GreyDivider from '../../../../components/GreyDivider';

class LearnNGrow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4 className="txt15 mt0 strong pt0" >Learn &amp; Grow</h4>
        <GreyDivider />
        {map(learngrow, course => (
          <div className="row dis-inline">
            <div className="col-md-3 mb20">
              <a className="a-tag" target="_blank" href="" title={course.name}>
                <img className="maxw50" src={course.url} />
              </a>
            </div>
            <div className="col-md-9 pdl0">
              <a className="txt13 txt-color a-tag" title={course.name}>
                {course.name}
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

LearnNGrow.propTypes = {
};

export default LearnNGrow;