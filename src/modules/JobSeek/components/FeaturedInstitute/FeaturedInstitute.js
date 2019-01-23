import React, { Component } from 'react';
import map from 'lodash/map';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import '../Learning/Learning.css';
import { featuredInstitutes } from '../../../../models/featuredInstitutes';
import GreyDivider from '../../../../components/GreyDivider';

class FeaturedInstitute extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const featureComponent = map(featuredInstitutes, featuredInstitute => (
      <div className="col-md-12 pdrl">
        <img className="" src={featuredInstitute.url} alt={featuredInstitute.name}/>
      </div>
    ));
    return (
      <div className="mb20 ml6">
        <div className="txt15">
          <h4 className="txt15 mt0 strong pt0">Featured Institute</h4>
        </div>
        <GreyDivider />
        <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop
          showArrows>
          {featureComponent}
        </Carousel>
      </div>
    );
  }
}

FeaturedInstitute.propTypes = {
};

export default FeaturedInstitute;