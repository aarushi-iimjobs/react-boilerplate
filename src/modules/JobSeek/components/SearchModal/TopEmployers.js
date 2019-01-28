import React from 'react';
import map from 'lodash/map';
import { topEmployers } from '../../../../models/topEmployers';

const TopEmployers = () => (
  <div className="article top_employers">
    <div className="top_employer">
      <h4 className="section_title">Top Employers</h4>
      <div className="top_employees carousel">
        {map(topEmployers, employer => (
          <a href={employer.href}>
            <div className="employee_thumb" id={employer.id}>
              <img src={employer.url} alt="" />
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default TopEmployers;
