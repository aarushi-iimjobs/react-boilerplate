import React from 'react';

const FeaturedWomenEmployers = () => (
  <div className="featured_women_employers_container">
    <h4 className="section_title">Employers looking out for women professionals like you</h4>
    <div className="featured_women_employer_div">
      <a href="https://diversity.iimjobs.com/company/gsk.html?ref=jobseekerSearch">
        <img src="https://www.iimjobs.com/resources/images/GSK.jpg" className="featured_women_employer_image" alt="" />
        <p className="featured_women_employer_name">GSK</p>
      </a>
    </div>

    <div className="featured_women_employer_div">
      <a href="https://diversity.iimjobs.com/company/accenture.html?ref=jobseekerSearch">
        <img src="https://www.iimjobs.com/resources/images/Accenture.jpg" className="featured_women_employer_image" alt="" />
        <p className="featured_women_employer_name">Accenture</p>
      </a>
    </div>
      
    <div className="featured_women_employer_div mr0">
      <a href="https://diversity.iimjobs.com/company/wns.html?ref=jobseekerSearch">
        <img src="https://www.iimjobs.com/resources/images/WNS-search-overlay.jpg" className="featured_women_employer_image" alt="gsk" />
        <p className="featured_women_employer_name">WNS</p>
      </a>
    </div>
  </div>
);

export default FeaturedWomenEmployers;
