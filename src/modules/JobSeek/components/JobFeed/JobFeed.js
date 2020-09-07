import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import map from 'lodash/map';
import throttle from 'lodash/throttle';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { getJobFeed, getJobLoading } from '../../selectors';
import { removeJob } from '../../actions';
import './JobFeed.css';
import Banner from '../Banner';
import Job from '../Job';
import getJobFeeds from '../../api';
import Dropdown from '../../../../components/Dropdown';
import FilterBox from '../../../../components/FilterBox';
import Button from '../../../../components/Button';
import Select from '../../../../components/Select';
import SearchLocation from '../../../../components/SearchLocation';
import {
  relevanceOptions,
  experienceOptions,
  locationOptions
} from '../../../../models/dropdownOptions';

const Wrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 72%;
  position: relative;
`;

const throttleWaitTime = 1000;
const throttleOptions = { leading: true, trailing: true };

class JobFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'My Jobfeed',
      showRelevanceDropdown: false,
      showExperienceDropdown: false,
      showLocationDropdown: false,
    }
  }

  componentDidMount() {
    this.props.dispatch(getJobFeeds());
    window.addEventListener('scroll', throttle(
      this.windowSizeHandler,
      throttleWaitTime,
      throttleOptions,
    ));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', throttle(
      this.windowSizeHandler,
      throttleWaitTime,
      throttleOptions,
    ));
  }

  windowSizeHandler = e => {
    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) &&
      this.props.jobFeed.length < 90 && !this.props.isLoading
    ) {
      this.props.dispatch(getJobFeeds());
    }
  }

  openRelevanceDropdown = () => {
    this.setState(state => ({ showRelevanceDropdown: !state.showRelevanceDropdown }))
  }

  openExperienceDropdown = () => {
    this.setState(state => ({ showExperienceDropdown: !state.showExperienceDropdown }))
  }

  openLocationDropdown = () => {
    this.setState(state => ({ showLocationDropdown: !state.showLocationDropdown }))
  }

  render() {
    const { jobFeed, isLoading, removeJobFeed } = this.props;

    return (

      <Wrapper>
        <Banner />
        <div className="div-head" id="categorylist">
          <h1 className="job-heading txt-color">{this.state.title}</h1>
          <div className="clearfix visible-xs" />
          <div className="searchDiv">
            <form name="searchform" id="searchform" method="get">
              <input type="hidden" name="type" value="jobfeed" />
              <input type="hidden" name="currenturl" id="currenturl" value="https://www.iimjobs.com/jobfeed/" />  
              <div className="filter filterfulla mb10">
                <div className="pull-left mr10 filterfull">
                  <div className="relevance_filter" onClick={this.openRelevanceDropdown}>
                    <Select id="jobfeedSortBy" name="jobfeedSortBy" className="selectBox visible-xs">
                      <option value="https://www.iimjobs.com/rel/jobfeed">By Relevance</option>
                      <option defaultValue="" value="https://www.iimjobs.com/jobfeed">By Date</option>
                    </Select>
                    <FilterBox label="By Date" />
                    {this.state.showRelevanceDropdown &&
                      <Dropdown options={relevanceOptions} />
                    }
                  </div>
                </div>
                <div className="pull-left mr10 filterfull selectdiv"  onClick={this.openExperienceDropdown}>
                  <Select id="exp" name="exp" className="selectBox visible-xs">
                    <option defaultValue="" value="0">Any Exp. Level</option>
                    <option value="1">1-3 yrs</option>
                    <option value="2">4-6 yrs</option>
                    <option value="3">7-10 yrs</option>
                    <option value="4">11-15 yrs</option>
                    <option value="5">15+ yrs</option>
                  </Select>
                  <FilterBox label="Any Exp. Level" />
                  {this.state.showExperienceDropdown &&
                    <Dropdown options={experienceOptions} />
                  }
                </div>

                <div className="pull-left mr10 filterfull">
                  <div className="divmsdd" onClick={this.openLocationDropdown}>
                    <FilterBox label="Any Location" />

                    {this.state.showLocationDropdown &&
                      <SearchLocation options={locationOptions} />
                    }
                  </div>
                </div>
                <div className="clearfix visible-xs" />
                <Button type="submit" value="Filter" text="Filter" />
              </div>
              <div className="clearfix" />
              <div className="pull-left">
                <div id="errormsg" className="mb0 visible-xs" />
              </div>
            </form>
          </div>
        </div>
        <div className="jobfeed-wrapper">
          {map(jobFeed, (job, index) => (
            <Job
              removeJob={() => removeJobFeed(job.id)}
              key={job.id}
              index={index}
              premiumPost={parseInt(job.premium_post)}
              jobTitle={job.title}
              jobLocation={job.location}
              jobCreatedDate={job.published_date}
            />
          ))}
          {isLoading && jobFeed.length
            ? <h4 className="text-center">Loading...</h4> : ''}
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: getJobLoading,
  jobFeed: getJobFeed,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  removeJobFeed: id => dispatch(removeJob(id)),
});

JobFeed.propTypes = {
  jobFeed: PropTypes.array,
  isLoading: PropTypes.bool,
  removeJobFeed: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(JobFeed);
