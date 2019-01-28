import React from 'react';
import map from 'lodash/map';
import { trendingCourses } from '../../../../models/trendingCourses';

const TrendingCourses = () => (
  <div className="article trending_courses">
    <div className="courses_area">
      <h4 className="section_title">Trending Courses</h4>
      <div className="courses_area carousel">
        {map(trendingCourses, course => (
          <div className="course_thumb">
            <a href={course.href}>
              <div className="image_container">
                <div className="img">
                  <img className="myimg" src={course.url} alt="" />
                </div>
              </div>
              <p className="h121">{course.name}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TrendingCourses;
