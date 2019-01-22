import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';

import './SearchModal.css';

class SearchModal extends Component {
  constructor(props) {
    super(props);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.openExperienceDropdown = this.openExperienceDropdown.bind(this);
    this.openLocationDropdown = this.openLocationDropdown.bind(this);
    this.openPostingDropdown = this.openPostingDropdown.bind(this);
    this.state = {
      open: props.modalState,
      showExperienceDropdown: false,
      showLocationDropdown: false,
      showPostingDropdown: false,
    }
  }
  
  onOpenModal() {
		this.setState({ open: true });
	}

	onCloseModal() {
		this.setState({ open: false });
  }
  
  openExperienceDropdown() {
    this.setState((state) => ({ showExperienceDropdown: !state.showExperienceDropdown }))
  }
  
  openLocationDropdown() {
    this.setState((state) => ({ showLocationDropdown: !state.showLocationDropdown }))
  }
  
  openPostingDropdown() {
    this.setState((state) => ({ showPostingDropdown: !state.showPostingDropdown }))
  }

  render() {
    const { open } = this.state;
    
    return (
      <Modal open={open} onClose={e => e.preventDefault()} center styles={{ modal: { minWidth: '1000px', backgroundColor: 'blue' } }} showCloseIcon={false} classNames={{ modal: 'pure-u-md-1-2' }}>
        <div id="recruiter_search_overlay" className="main_overlay hidden-sm">
          <div className="overlay_container scrollContent">
            <div className="overlay_wrapper">
              <div className="close_overlay" onClick={this.onCloseModal}><i className="fa fa-close"></i></div>
              <div className="overlay_header">
                <div className="content_wrapper">
                  <form className="main_search_form">
                    <input id="search_term" className="main_input ui-autocomplete-input" placeholder="Search" autoComplete="off" />
                    {/* <select id="overlay-exp" name="exp" className="visible-xs expSelectBox">
                      <option value="0">Any Exp. Level</option>
                      <option value="1">1-3 yrs</option>
                      <option value="2">4-6 yrs</option>
                      <option value="3">7-10 yrs</option>
                      <option value="4">11-15 yrs</option>
                      <option value="5">15+ yrs</option>
                    </select> */}

                    <div id="search_experience" className="select-dropdown inactive">
                      <div onClick={this.openExperienceDropdown}>
                        <span className="dropdown_label">Experience</span>
                        <span className="chevron"><i className="fa fa-chevron-down"></i></span>
                      </div>
                      {this.state.showExperienceDropdown &&
                        <ul className="dropdown_options_list">
                          <li className="txt12" value="1">1 - 3 years</li>
                          <li className="txt12" value="2">4 - 6 years</li>
                          <li className="txt12" value="3">7 - 10 years</li>
                          <li className="txt12" value="4">11 - 15 years</li>
                          <li className="txt12" value="5">15+ years</li>
                        </ul>
                      }
                    </div>
                    <div id="search_location" className="select-dropdown inactive">
                      <div onClick={this.openLocationDropdown}>
                        <span className="dropdown_label">Location</span>
                        <span className="chevron"><i className="fa fa-chevron-down"></i></span>
                      </div>
                      {this.state.showLocationDropdown &&
                        <ul className="dropdown_options_list">                  
                          <li className="dropdown_list"><input type="checkbox" id="location_87" value="87" loctext="Metros"/><label htmlFor="location_87">Metros</label></li>
                          <li className="dropdown_list"><input type="checkbox" id="location_88" value="88" loctext="Anywhere in India" /><label htmlFor="location_88">Anywhere in India</label></li>
                          <li className="dropdown_list"><input type="checkbox" id="location_89" value="89" loctext="Overseas/International" /><label htmlFor="location_89">Overseas/International</label></li>
                          <li className="dropdown_list visible-xs">
                            <input type="checkbox" id="location5" /><label htmlFor="location5">15+ years</label>
                          </li>
                        </ul>
                      }
                    </div>
                            
                    {/* <select name="range" id="overlay-range" className="rangeSelectBox visible-xs">
                      <option value="0">Posting</option>
                      <option value="1">&lt; 3 Days</option>
                      <option value="2">Last Week</option>
                      <option value="3">Two Week</option>
                      <option value="4">Last Month</option>
                    </select> */}
                            
                    <div id="search_range" className="select-dropdown inactive">
                      <div onClick={this.openPostingDropdown}>
                        <span className="dropdown_label">Posting</span>
                        <span className="chevron"><i className="fa fa-chevron-down"></i></span>
                      </div>
                      {this.state.showPostingDropdown && 
                        <ul className="dropdown_options_list">
                          <li className="dropdown_list" value="1">&lt; 3 Days</li>
                          <li className="dropdown_list" value="2">Last Week</li>
                          <li className="dropdown_list" value="3">Two Weeks</li>
                          <li className="dropdown_list" value="4">Last Month</li>
                        </ul>
                      }
                    </div>
          
                    <input type="hidden" name="currsearchurl" id="currsearchurl" value="https://www.iimjobs.com/search/" />
                    <button type="submit" value="Search" className="submit_search_queries">Search</button>
                  </form>
                </div>
              </div>
              <div className="overlay_content">    
                <div className="featured_employer">
                  <div className="content_wrapper">
                    <a href="https://showcase.iimjobs.com/rscp-gsk-2446.html?ref=jssearch" target="_blank">
                      <h4 className="section_title">Featured Employer</h4>
                    </a>
                    <div className="content_body">
                      <a href="https://showcase.iimjobs.com/rscp-gsk-2446.html?ref=jssearch" target="_blank">
                        <div className="content_header_new">
                          <img src="https://static.iimjobs.com/resources/img/gsk-logo-search.png" />
                        </div>
                      </a>
                      <div className="hero_image">
                        <a href="https://showcase.iimjobs.com/rscp-gsk-2446.html?ref=jssearch" target="_blank">
                          <img src="https://static.iimjobs.com/resources/img/gsk-search-banner.jpg" />
                        </a>
                        <div className="hero_text_trailer_new">
                          <a href="https://showcase.iimjobs.com/rscp-gsk-2446.html?ref=jssearch" target="_blank"></a>
                          <a href="https://showcase.iimjobs.com/rscp-gsk-2446.html?ref=jssearch" className="see_inside_link" target="_blank">See inside the office of GSK
                            <span className="chevron-right">
                              <i className="fa fa-chevron-right"></i>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="featured_women_employers_container">
                        <h4 className="section_title">Employers looking out for women professionals like you</h4>
                        <div className="featured_women_employer_div">
                          <a href="https://diversity.iimjobs.com/company/gsk.html?ref=jobseekerSearch" target="_blank">
                            <img src="/home/dell/work/practice/iimjobs-portal/src/modules/JobSeek/components/img/gsk.jpeg" className="featured_women_employer_image" />
                            <p className="featured_women_employer_name">GSK</p>
                          </a>
                        </div>

                        <div className="featured_women_employer_div">
                          <a href="https://diversity.iimjobs.com/company/accenture.html?ref=jobseekerSearch" target="_blank">
                            <img src="/home/dell/work/practice/iimjobs-portal/src/modules/JobSeek/components/img/accenture.jpeg" className="featured_women_employer_image" />
                            <p className="featured_women_employer_name">Accenture</p>
                          </a>
                        </div>
                          
                        <div className="featured_women_employer_div mr0">
                          <a href="https://diversity.iimjobs.com/company/wns.html?ref=jobseekerSearch" target="_blank">
                            <img src="../img/123.jpg" className="featured_women_employer_image" alt="gsk" />
                            <p className="featured_women_employer_name">WNS</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="top_listing">
                  <div className="article recent_searches">
                    <h4 className="section_title">Recent Searches</h4>
                    <div className="search_tag_area">
                      <span className="tag">
                        <a href="https://www.iimjobs.com/search/-0-0-0-1.html?ref=jssearch"></a>
                      </span>
                      <span className="tag">
                        <a href="https://www.iimjobs.com/search/iimjobs.com-0-0-0-1.html?ref=jssearch">iimjobs.com</a>
                      </span>
                      <span className="tag">
                        <a href="https://www.iimjobs.com/search/associate+iimjobs-0-0-0-1.html?ref=jssearch">associate iimjobs</a>
                      </span>
                      <span className="tag">
                        <a href="https://www.iimjobs.com/search/iimjobs-0-0-0-1.html?ref=jssearch">iimjobs</a>
                      </span>
                      <span className="tag">
                        <a href="https://www.iimjobs.com/search/associate+product+manager-0-0-0-1.html?ref=jssearch">associate product manager</a>
                      </span>
                      <span className="tag">
                        <a href="https://www.iimjobs.com/search/urban+ladder-0-0-0-1.html?ref=jssearch">urban ladder</a>
                      </span>
                    </div>
                  </div>

                  <div className="article top_employers">
                    <div className="top_employer">
                      <h4 className="section_title">Top Employers</h4>
                      <div className="top_employees carousel">
                        <a href="https://showcase.iimjobs.com/rscp-pepsico-52.html?ref=jssearch">
                          <div className="employee_thumb" id="first">
                            <img src="https://static.iimjobs.com/resources/img/topemp/iimjobs/18/8/pepsico.png" />
                          </div>
                        </a>
                        <a href="https://showcase.iimjobs.com/rscp-american-express-40.html?ref=jssearch">
                          <div className="employee_thumb" id="second">
                            <img src="https://static.iimjobs.com/resources/img/topemp/iimjobs/18/11/LogoAmex1000.jpg" />
                          </div>
                        </a>    
                        <a href="https://showcase.iimjobs.com/rscp-shell-202.html?ref=jssearch">
                          <div className="employee_thumb" id="third">
                            <img src="https://static.iimjobs.com/resources/img/topemp/iimjobs/18/10/shell.png" />
                          </div>
                        </a>
                        <a href="http://showcase.iimjobs.com/rscp-pampg-2458.html?ref=jssearch">
                          <div className="employee_thumb" id="fourth">
                            <img src="https://static.iimjobs.com/resources/img/topemp/iimjobs/18/8/pG.png" />
                          </div>
                        </a>
                        <a href="https://showcase.iimjobs.com/rscp-hansa-cequity-1196.html?ref=jssearch">
                          <div className="employee_thumb" id="fifth">
                            <img src="https://static.iimjobs.com/resources/img/topemp/iimjobs/18/12/Hansa-Cequity.png" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="article trending_courses">
                    <div className="courses_area">
                      <h4 className="section_title">Trending Courses</h4>
                      <div className="courses_area carousel">
                        <div className="course_thumb">
                          <a href="https://www.iimjobs.com/course/iift-executive-development-program-in-strategies-for-international-business-1373.html?reforg=search&amp;refinv=search">
                            <div className="image_container">
                              <div className="img">
                                <img className="myimg" src="https://edgar.iimjobs.com/media/courselogo/2018/10/25/2018-10-25-15-59-51-47815-59697.jpg" />
                              </div>
                            </div>
                            <p className="h121">IIFT - Executive Development Program in Strategies for International Business</p>
                          </a>
                        </div>
                        <div className="course_thumb">
                          <a href="https://www.iimjobs.com/course/pg-certificate-programme-in-business-management-from-mica-0-30-yrs-1193.html?reforg=search&amp;refinv=search">
                            <div className="image_container">
                              <div className="img">
                                <img className="myimg" src="https://edgar.iimjobs.com/media/courselogo/2017/09/29/2017-09-29-13-01-54-10203-59697.jpg" />
                              </div>
                            </div>
                            <p className="h121">PG Certificate Programme in Business Management From MICA</p>
                          </a>
                        </div>
                        <div className="course_thumb">
                          <a href="https://www.iimjobs.com/course/xlri-executive-development-program-in-strategic-management-1345.html?reforg=search&amp;refinv=search">
                            <div className="image_container">
                              <div className="img">
                                <img className="myimg" src="https://edgar.iimjobs.com/media/courselogo/2018/08/21/2018-08-21-14-25-07-73579-59697.jpg" />
                              </div>
                            </div>
                            <p className="h121">XLRI | Executive Development Program in Strategic Management</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
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