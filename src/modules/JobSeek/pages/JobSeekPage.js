import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { removeJob } from '../actions';
import JobFeed from '../components/JobFeed';
import { getJobFeed } from '../selectors';

const JobFeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class JobSeek extends React.Component {
  render() {
    const {
      jobFeeds,
      removeJob
    } = this.props;
    return (
      <JobFeedWrapper>
        <JobFeed
          jobFeed={jobFeeds}
          removeJob={removeJob}
        />
      </JobFeedWrapper>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  jobFeeds: getJobFeed,
});

const mapDispatchToProps = dispatch => ({
  removeJob: id => dispatch(removeJob(id)),
});

JobSeek.propTypes = {
  jobFeeds: PropTypes.array,
  removeJob: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(JobSeek);
