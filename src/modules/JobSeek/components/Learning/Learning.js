import React, { Component } from 'react';
import styled from 'styled-components';

import './Learning.css';
import ShowProfile from '../ShowProfile';
import FeaturedEmployer from '../FeaturedEmployer';
import GreyDivider from '../../../../components/GreyDivider';
import FeaturedInstitute from '../FeaturedInstitute';
import LearnNGrow from '../LearnNGrow';

const LearningWrapper = styled.div`
  width: 26%;
  position: relative;
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
`;

class Learning extends Component {
  constructor(props) {
    super(props);
    this.handleIconClick = this.handleIconClick.bind(this);
    this.state = {
      showProfile: false,
    };
  }

  handleIconClick() {
    this.setState(this.toggleShowProfileState);
  }

  toggleShowProfileState(state) {
    return {
      showProfile: !state.showProfile,
    };
  }

  render() {
    return (
      <LearningWrapper>
        <div id="featured" className="featured-div hidden-sm">
          <FeaturedEmployer />
          <div id="jobfeed_rightcol" className="txt15">
            You can customize your jobfeed
            <a className="greentxt txt15 ml6" href="https://www.iimjobs.com/meta">here</a>
          </div>
          <div className="clearfix"></div>
          <div className="pd0">
            <div className="leftnewprofinsecbox">
              <div className="leftnewskillbox">
                <h2 className="profstatbg h2forotherpage txt-display txt-color wd34 ml14" id="profclick">
                  Profile Status
                  {
                    this.state.showProfile ? 
                    <img className="artogprofstat" src="https://static.iimjobs.com/resources/img/profstatupar.png" id="showupimg" onClick={this.handleIconClick} />
                    :
                    <img src="https://static.iimjobs.com/resources/img/profstatbelowar.png" className="artogprofstat hidden-sm" id="showbelowimg" onClick={this.handleIconClick} /> 
                  }
                </h2>
                {this.state.showProfile && 
                  (<div id="prodisbl" className="prof">
                    <div className="newprofwidgetsect">
                      <span className="media-left media-middle active">
                        <img src="https://edgar.iimjobs.com/media/userpics/2018/09/07/2018-09-07-14-56-22-456800.jpg" className="profsttavtaarimg" />
                      </span>
                      <h3 className="name-hd">Aarushi Goyal<span class="displaytabemail">aarushi@iimjobs.com <span class="profscore">100%</span></span>
                        <span className="profstatbarouter">
                          <span className="profstatbarinner wd-full">
                          </span>
                        </span>
                      </h3>
                    </div>
                    <ShowProfile />
                  </div>)
                }
              </div>
            </div>
            <div className="lefnewskillboxpadb0">
              <a className="a-tag" href="https://learning.iimjobs.com/?ref=tab" target="_blank">
                <h2 className="learningcenterb h2forotherpage txt-color txt-display" id="profclick">
                  Learning Center
                  <img src="https://static.iimjobs.com/resources/img/learar.png" className="arrtlesrcen" />
                </h2>
              </a>
              <div className="visible-xs" id="prodisbl mt7 visible-xs"></div>
            </div>
            <div className="ad-div">
              <a className="a-tag" target="_blank" href="https://showcase.iimjobs.com">
                <img className="wd-full" src="https://static.iimjobs.com/resources/images/TR_GSK_JF_12Feb18.jpg" alt="GSK" />
              </a>
            </div>
            <div id="learnngrow" className="hidden-sm learn ml14">
              <FeaturedInstitute />
              <LearnNGrow />
            </div>
          </div>
          <div className="sectionHide">
            <div className="pd0 pd5 col-md-12 wd-full">
             <GreyDivider />  
              <h4 className="txt15 mt0 strong pt7">From our Blog</h4>
             <GreyDivider />
              <div className="col-md-12 wd-full pd0">
                <a target="_blank" className="txt-color a-tag">How to identify a 'Talker' from a 'Doer' when you're hiring?</a>
                <div className="talent">
                  <div className="col-md-10 mt7 txt12 text-right">
                    <span>All Things Talent</span>
    
                    <div className="clearfix"></div>
                    <small> <i>2018-11-28</i></small>
                  </div>
                  <div className="col-md-2 pd0">
                    <img className="img-circle-small" src="https://allthingstalent.org/wp-content/uploads/2018/05/all-things-talent-powered-by-iimjobs-hirist-160.png" />
                  </div>
                </div>
              </div>
             <GreyDivider />
              <div className="col-md-12 wd-full pd0">
                <a target="_blank" className="txt-color a-tag">How to deal with and weed out the groupism at your workplace?</a>
                <div className="talent">
                  <div className="col-md-10 mt7 txt12 text-right">
                    <span>All Things Talent</span>
    
                    <div className="clearfix"></div>
                    <small> <i>2018-11-28</i></small>
                  </div>
                  <div className="col-md-2 pd0">
                    <img className="img-circle-small" src="https://allthingstalent.org/wp-content/uploads/2018/05/all-things-talent-powered-by-iimjobs-hirist-160.png" />
                  </div>
                </div>
              </div>
             <GreyDivider />
            </div>
          </div>
        </div>
  
      </LearningWrapper>
    );
  }
} 

Learning.propTypes = {
};

export default Learning;