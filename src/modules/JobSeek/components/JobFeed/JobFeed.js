import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import map from 'lodash/map';
import throttle from 'lodash/throttle';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { getJobFeed } from '../../selectors';
import { removeJob } from '../../actions';
import './JobFeed.css';
import Banner from '../Banner';
import Job from '../Job';
import { getJobFeeds } from '../../api';

const Wrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 72%;
  position: relative;
`;

const debounceWaitTime = 1000;
const debounceOptions = { leading: true, trailing: true };

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

  throttledWindowHandler = () => throttle(
    this.windowSizeHandler,
    debounceWaitTime,
    debounceOptions
  );

  componentDidMount() {
    this.props.dispatch(getJobFeeds());
    // window.addEventListener('scroll', this.throttledWindowHandler);
  }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.throttledWindowHandler);
  // }

  // windowSizeHandler = e => {
  //   if (
  //     (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) &&
  //     this.props.list.length && this.props.isLoading
  //   ) {
  //     this.props.dispatch(getJobFeeds());
  //   }
  // }

  openRelevanceDropdown = () => {
    this.setState((state) => ({ showRelevanceDropdown: !state.showRelevanceDropdown }))
  }

  openExperienceDropdown = () => {
    this.setState((state) => ({ showExperienceDropdown: !state.showExperienceDropdown }))
  }
  
  openLocationDropdown = () => {
    this.setState((state) => ({ showLocationDropdown: !state.showLocationDropdown }))
  }

  render() {
    const { jobFeed, removeJobFeed } = this.props;

    return (

      <Wrapper>
        <Banner />
        <div className="div-head" id="categorylist">
          <h1 className="job-heading txt-color">{this.state.title}</h1>
          <div className="clearfix visible-xs"></div>
          <div className="searchDiv">
            <form name="searchform" id="searchform" method="get">
              <input type="hidden" name="type" value="jobfeed" />
              <input type="hidden" name="currenturl" id="currenturl" value="https://www.iimjobs.com/jobfeed/" />  
              <div className="filter filterfull filterfulla mb10">
                <div className="pull-left mr10 filterfull">
                  <div className="relevance_filter">
                    <select id="jobfeedSortBy" name="jobfeedSortBy" className="selectBox visible-xs">
                      <option value="https://www.iimjobs.com/rel/jobfeed">By Relevance</option>
                      <option defaultValue="" value="https://www.iimjobs.com/jobfeed">By Date</option>
                    </select>
                    <a className="selectBox selectBox-dropdown dd" onClick={this.openRelevanceDropdown} title="" tabIndex="0">
                      <span className="selectBox-label wd110">By Date</span>
                      <span className="selectBox-arrow"></span>
                    </a>
                    {this.state.showRelevanceDropdown &&
                      <ul class="selectBox-dropdown-menu selectBox-options relevance-dd">
                        <li class="">
                          <a rel="https://www.iimjobs.com/rel/jobfeed">By Relevance</a>
                        </li>
                        <li class="selectBox-selected">
                          <a rel="https://www.iimjobs.com/jobfeed">By Date</a>
                        </li>
                      </ul>
                    }
                  </div>
                </div>
                <div className="pull-left mr10 filterfull selectdiv">
                  <select id="exp" name="exp" className="selectBox visible-xs">
                    <option defaultValue="" value="0">Any Exp. Level</option>
                    <option value="1">1-3 yrs</option>
                    <option value="2">4-6 yrs</option>
                    <option value="3">7-10 yrs</option>
                    <option value="4">11-15 yrs</option>
                    <option value="5">15+ yrs</option>
                  </select>
                  <a className="selectBox selectBox-dropdown dd" onClick={this.openExperienceDropdown} title="" tabIndex="0">
                    <span className="selectBox-label wd110">Any Exp. Level</span>
                    <span className="selectBox-arrow"></span>
                  </a>
                  {this.state.showExperienceDropdown &&
                    <ul class="selectBox-dropdown-menu selectBox-options experience-dd">
                      <li class="selectBox-selected"><a rel="0">Any Exp. Level</a></li>
                      <li><a rel="1">1-3 yrs</a></li>
                      <li><a rel="2">4-6 yrs</a></li>
                      <li><a rel="3">7-10 yrs</a></li>
                      <li><a rel="4">11-15 yrs</a></li>
                      <li><a rel="5">15+ yrs</a></li>
                    </ul>
                  }
                </div>

                <div className="pull-left mr10 mt10-mobile flclearboth400 filterfull">
                  <div className="divmsdd">
                    <div className="divclicktxt filterfull" onClick={this.openLocationDropdown}>
                      <a className="selectBox selectBox-dropdown display-in" title="" tabIndex="0">
                        <span className="selectBox-label ellipsis pd15" title="">Any Location</span>
                        <span className="selectBox-arrow hidden-sm"></span>
                        <span className="selectBox-arrow visible-xs arrightno"></span>
                      </a>
                    </div>

                    {this.state.showLocationDropdown &&
                      <div className="divcheckboxlist txt12 divcheckboxlist400view fullblck" name="dvloc" id="dvloc">
                        <input type="text" id="myLocInput" placeholder="Search Location" title="Type in a location" />
                        <div className="eachloc" data-value="Metros">
                          <div className="pull-left mrckbx">
                            <input id="loc87" name="loc" type="checkbox" value="87" loctext="Metros" />
                          </div> 
                          <label className="pull-left lh21" htmlFor="loc87">Metros</label>
                        </div>
                        <div className="eachloc" data-value="Anywhere in India">
                          <div className="pull-left mrckbx">
                            <input id="loc88" name="loc" type="checkbox" value="88" loctext="Anywhere in India" />
                          </div>
                          <label className="pull-left lh21" htmlFor="loc88">Anywhere in India</label>
                        </div>
                        <div className="eachloc" data-value="Overseas/International">
                          <div className="pull-left mrckbx"> 
                            <input id="loc89" name="loc" type="checkbox" value="89" loctext="Overseas/International" />
                          </div>
                          <label className="pull-left lh21" htmlFor="loc89">Overseas/International</label>
                        </div>
                      </div>
                    }
                  </div>
                </div>
                <div className="clearfix visible-xs"></div>    
                <div className="pull-left">
                  <input className="greybtn pull-left filterlist" type="submit" value="Filter" title="Filter" alt="Filter" />
                </div> 
              </div>
              <div className="clearfix"></div>
              <div className="pull-left">
                <div id="errormsg" className="mb0 visible-xs"></div>
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
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  jobFeed: getJobFeed,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  removeJobFeed: id => dispatch(removeJob(id)),
});

JobFeed.propTypes = {
  dispatch: PropTypes.func,
  jobFeed: PropTypes.array,
  removeJobFeed: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(JobFeed);
