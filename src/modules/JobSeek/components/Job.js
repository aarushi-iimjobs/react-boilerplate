import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import '../css/Job.css';
import join from 'lodash/join';
import map from 'lodash/map';

import calculateDateInFormat from '../../../utils/calculateDate';

const JobWrapper = styled.div`
  margin: 15px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
`;

const Job = ({ premiumPost, jobTitle, jobLocation, jobCreatedDate, removeJob }) => {
  const postingDate = calculateDateInFormat(jobCreatedDate);
  return (
    <JobWrapper>
      <div className="col-lg-12">

        <span className="span-design">
          <i className="fa fa-suitcase"></i>
        </span>
        <span className={"span-design " + (premiumPost ? "": "span-new")}>
          <i className="fa fa-bookmark"></i>
        </span>
        <span className="span-design">
          <i className="fa fa-plus-circle"></i>
        </span>
        <span className="span-margin">
          <i className="fa fa-star-o"></i>
        </span>
        <span className="span-design minwidth">
          {jobTitle}
        </span >
        <span className="span-design">
          {jobLocation}
        </span>
        <span className="span-design">
          {postingDate}
        </span>
        <span className="span-design">
          <button onClick={removeJob} className="cross-button">
            <i className="fa fa-times"></i>
          </button>
        </span>
      </div>
    </JobWrapper>
  );
};

Job.propTypes = {
  premiumPost: PropTypes.bool,
  jobTitle: PropTypes.string,
  jobLocation: PropTypes.string,
  jobCreatedDate: PropTypes.string,
  removeJob: PropTypes.func.isRequired,
};

export default Job;