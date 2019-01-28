import React from 'react';
import styled from 'styled-components';
import Loadable from 'react-loadable';

function Loading() {
  return <h3>Loading...</h3>;
}

const JobFeed = Loadable({
  loader: () => import('../components/JobFeed'),
  loading: Loading,
});

const Learning = Loadable({
  loader: () => import('../components/Learning'),
  loading: Loading,
})

const JobFeedWrapper = styled.div`
`;

const PageContentWrapper = styled.div`
  min-height: 600px;
  padding: 20px;
  float: left;
  background-color: #fff;
`;

const JobSeek = () => (
  <JobFeedWrapper>
    <PageContentWrapper>
      <JobFeed />
      <Learning />
    </PageContentWrapper>
  </JobFeedWrapper>
)

JobSeek.propTypes = {
};

export default JobSeek;
