import React from 'react';
import styled from 'styled-components';

import JobFeed from '../components/JobFeed';
import Learning from '../components/Learning';

const JobFeedWrapper = styled.div`
`;

const PageContentWrapper = styled.div`
  min-height: 600px;
  padding: 20px;
  float: left;
  background-color: #fff;
`;

class JobSeek extends React.Component {
  render() {
    return (
      <JobFeedWrapper>
        <PageContentWrapper>
          <JobFeed />
          <Learning />
        </PageContentWrapper>
      </JobFeedWrapper>
    )
  }
}

JobSeek.propTypes = {
};

export default JobSeek;
