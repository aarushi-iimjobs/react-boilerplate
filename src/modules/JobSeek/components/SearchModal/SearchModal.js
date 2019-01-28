import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';

import './SearchModal.css';
import Button from '../../../../components/Button';
import Dropdown from '../../../../components/Dropdown';
import FilterBox from '../../../../components/FilterBox';
import SearchLocation from '../../../../components/SearchLocation';
import SearchBar from '../../../../components/SearchBar';
import {
  experienceOptions,
  postingOptions,
  locationOptions,
} from '../../../../models/dropdownOptions';
import RecentSearches from './RecentSearches';
import TopEmployers from './TopEmployers';
import TrendingCourses from './TrendingCourses';
import FeaturedWomenEmployers from './FeaturedWomenEmployers';
import FeaturedEmp from './FeaturedEmp';
// import Select from '../../../../components/Select';

class SearchModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.modalState,
      showExperienceDropdown: false,
      showLocationDropdown: false,
      showPostingDropdown: false,
    }
  }

  onOpenModal = () => {
    this.setState({ open: true });
  }

  onCloseModal = () => {
    this.setState({ open: false });
  }

  openExperienceDropdown = () => {
    this.setState(state => ({ showExperienceDropdown: !state.showExperienceDropdown }))
  }

  openLocationDropdown = () => {
    this.setState(state => ({ showLocationDropdown: !state.showLocationDropdown }))
  }

  openPostingDropdown = () => {
    this.setState(state => ({ showPostingDropdown: !state.showPostingDropdown }))
  }

  hideMe = (e) => {
    e.preventDefault();
  }

  render() {
    const {
      open,
      showExperienceDropdown,
      showLocationDropdown,
      showPostingDropdown
    } = this.state;

    return (
      <Modal open={open} onClose={e => e.preventDefault()} center styles={{ modal: { minWidth: '1000px', backgroundColor: 'blue' } }} showCloseIcon={false} classNames={{ modal: 'pure-u-md-1-2' }}>
        <div id="recruiter_search_overlay" className="main_overlay hidden-sm">
          <div className="overlay_container scrollContent">
            <div className="overlay_wrapper">
              <div className="close_overlay" onClick={this.onCloseModal}><i className="fa fa-close" /></div>
              <div className="overlay_header">
                <div className="content_wrapper">
                  <form className="main_search_form">
                    <SearchBar />
                    {/* <Select id="overlay-exp" name="exp" className="visible-xs">
                      <option value="0">Any Exp. Level</option>
                      <option value="1">1-3 yrs</option>
                      <option value="2">4-6 yrs</option>
                      <option value="3">7-10 yrs</option>
                      <option value="4">11-15 yrs</option>
                      <option value="5">15+ yrs</option>
                    </Select> */}

                    <div id="search_experience" className="select-dropdown inactive" onClick={this.openExperienceDropdown}>
                      <FilterBox label="Experience" />
                      {showExperienceDropdown
                        && <Dropdown options={experienceOptions}/>
                      }
                    </div>
                    <div id="search_location" className="select-dropdown inactive" onClick={this.openLocationDropdown}>
                      <FilterBox label="Location" />
                      {showLocationDropdown
                        && <SearchLocation options={locationOptions} />
                      }
                    </div>

                    {/* <Select name="range" id="overlay-range" className="rangeSelectBox visible-xs">
                      <option value="0">Posting</option>
                      <option value="1">&lt; 3 Days</option>
                      <option value="2">Last Week</option>
                      <option value="3">Two Week</option>
                      <option value="4">Last Month</option>
                    </Select> */}

                    <div id="search_range" className="select-dropdown inactive" onClick={this.openPostingDropdown}>
                      <FilterBox label="Posting" />
                      {showPostingDropdown
                        && <Dropdown options={postingOptions} />
                      }
                    </div>

                    <input type="hidden" name="currsearchurl" id="currsearchurl" value="https://www.iimjobs.com/search/" />
                    <Button type="submit" value="Search" text="Search" onClickButton={this.hideMe} />
                  </form>
                </div>
              </div>
              <div className="overlay_content">    
                <div className="featured_employer">
                  <FeaturedEmp />
                  <FeaturedWomenEmployers />
                </div>
                <div className="top_listing">
                  <RecentSearches />
                  <TopEmployers />
                  <TrendingCourses />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

SearchModal.propTypes = {
  modalState: PropTypes.bool,
};

export default SearchModal;
