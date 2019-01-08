import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import ReactTable from 'react-table';
// import 'react-table/react-table.css'
import map from 'lodash/map';
import Job from './Job.js';
import '../css/Job.css';

const Wrapper = styled.div`
  padding: 10px;
  margin: 2px auto;
  display: flex;
  flex-direction: column;
  border-left-color: ${({ selected }) => selected ? 'dimgrey' : 'transparent'};
  border-left-style: solid;
  border-left-width: 5px;
  width: 80%;
  `;

const columns = [{
    accessor: 'id' // String-based value accessors!
  }, {
    accessor: 'premium_post',
  }, {
    accessor: 'title'
  }, {
    accessor: 'location'
  }, {
    accessor: 'created'
  }
]
  
//   :hover {
//     box-shadow: 0 1px 1px rgba(0,0,0,0.1);
//     background-color: ${({ disabled }) => disabled ? 'lightgray' : '#ffffff'};
//   }

const JobFeed = ({ jobFeed, removeJob }) => (
  <Wrapper>
    <h1 className="job-heading">My Jobfeed</h1>
    {map(jobFeed, job => (
      <Job
        removeJob={() => removeJob(job.id)}
        key={job.id}
        premiumPost={job.premium_post}
        jobTitle={job.title}
        jobLocation={job.location}
        jobCreatedDate={job.created}
      />
    ))}
  </Wrapper>
);

// const JobFeed = ({ jobFeed, removeJob }) => (
//   <Wrapper>
//     <ReactTable
//       data={jobFeed}
//       columns={columns}
//     />
//   </Wrapper>
// )

JobFeed.propTypes = {
  jobFeed: PropTypes.array,
  removeJob: PropTypes.func.isRequired,
};

export default JobFeed;
