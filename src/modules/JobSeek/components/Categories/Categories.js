import React, { Component } from 'react';
import styled from 'styled-components';
import map from 'lodash/map';

import { categories } from '../../../../models/categories';
import './Categories.css';
import Logo from '../../../../components/Logo';

const CategoriesWrapper = styled.nav`
  display: inline-block;
  margin: 2rem auto 0;
  color: #fff;
  text-align: left;
  width: 110%;
  margin-top: 9px;
  a {
    color: #fff;
    display: block;
    text-decoration: none;
  }
`;

class Categories extends Component {
  render() {
    return (
      <CategoriesWrapper>
        <Logo />
        <ul className="nav-menu">
          {map(categories, category => (
            <li className="nav-menu-item">
              <a href="" className="category-item">{category.name}</a>
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
      </CategoriesWrapper>
    );
  }
}

Categories.propTypes = {
};

export default Categories;
