import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import map from 'lodash/map';

import { categories } from '../../../models/categories';
import '../css/Categories.css';

const Categories = () => (
  <nav className="nav">
    <div class="sidebar-brand pull-left text-right col-md-1 pd0">
      <a href="https://www.iimjobs.com/jobfeed" class="sitename">
        <h3>iimjobs</h3>
        <span>.com</span>
      </a>
    </div>
    <ul className="nav-menu">
    {map(categories, category => (
      <li className="nav-menu-item">
        <a href="">{category.name}</a>
        <ul className="nav-submenu">
          {map(category.jobs, job => (
            <li className="nav-submenu-item">
              <a href=""  className="dropdown-item">{job}</a>
            </li>
          ))}
        </ul>
      </li>
    ))}
    </ul>
  </nav>
);

Categories.propTypes = {
};

export default Categories;