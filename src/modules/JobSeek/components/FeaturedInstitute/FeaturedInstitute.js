import React, { Component } from 'react';
import map from 'lodash/map';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import '../Learning/Learning.css';
import { featuredInstitutes } from '../../../../models/featuredInstitutes';

class FeaturedInstitute extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mb20">
        <Carousel showThumbs={false} showStatus={false}>
          {map(featuredInstitutes, featuredInstitute => (
            <div className="col-md-12 pdrl">
              <img className="" src={featuredInstitute.url} alt={featuredInstitute.name}/>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}

FeaturedInstitute.propTypes = {
};

export default FeaturedInstitute;