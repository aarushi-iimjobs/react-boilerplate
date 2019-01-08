
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import '../css/Menu.css';

import { default as Dropdown, DropdownContent, DropdownTrigger } from "react-simple-dropdown";
import Profile from './Profile';

// class Menu extends React.Component{
//     render () {
//         return (
//             <Dropdown>
//                 <DropdownTrigger>Profile</DropdownTrigger>
//                 <DropdownContent>
//                     <img src="avatar.jpg" /> Username
//                     <ul>
//                         <li>
//                             <a href="/profile">Profile</a>
//                         </li>
//                         <li>
//                             <a href="/favorites">Favorites</a>
//                         </li>
//                         <li>
//                             <a href="/logout">Log Out</a>
//                         </li>
//                     </ul>
//                 </DropdownContent>
//             </Dropdown>
//         )
//     }
// };

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    return (
    // <Wrapper>
      <div>
        <div className="dis"
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
          <i className="fa fa-bars bar"></i>
          <span className="menu-design">
            Menu
          </span>
        </div>
        <Profile isHovering={this.state.isHovering} />
        <span className="fa fa-bell notify-bell" id="notifybellid">
          {/* <i data-value=""></i> */}
        </span>
        <a onclick="showOverlay" className="search_overlay_trigger"><i className="fa fa-search"></i></a>
      </div>
      // </Wrapper>
    );
  }
}



Menu.propTypes = {
};

export default Menu;