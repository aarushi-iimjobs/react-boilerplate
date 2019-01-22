import React, { Component } from 'react';
import './Menu.css';

import Profile from '../Profile';
import Notification from '../Notification';
import SearchModal from '../SearchModal';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.handleNotifyBell = this.handleNotifyBell.bind(this);
    this.openSearchModal = this.openSearchModal.bind(this);
    this.state = {
      isHovering: false,
      showNotification: false,
      showSearchModal: false,
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

  handleNotifyBell() {
    this.setState(this.toggleNotifyBellClick);
  }

  toggleNotifyBellClick(state) {
    return {
      showNotification: !state.showNotification,
    }
  }

  openSearchModal() {
    this.setState(() => ({ showSearchModal: true }));
  }

  render() {
    return (
      <ul className="sidebsmall sidebar-nav">
        <li className="posrel pd0 pull-left mw50 lh47">
          <div className="menu userlink ellipsis"
            onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}
          >
            <i className="fa fa-bars txt17 grey_txt"></i>
            <span className="txt17 col menu-span">Menu</span>
            {this.state.isHovering ? <Profile /> : ''}
          </div>
        </li>
        <li className="posrel">
          <span className="fa fa-bell notifybell" id="notifybellid" onClick={this.handleNotifyBell}>
            <i className="notcbell visible-xs" data-value=""></i>
          </span>
          {(this.state.showNotification && !this.state.isHovering) ? <Notification /> : ''}
        </li>
        <li className="posrel x">
          <a onClick={this.openSearchModal} className="search_overlay_trigger">
            <i className="fa fa-search"></i>
          </a>
          {
            this.state.showSearchModal &&
            
            <SearchModal 
              modalState={this.state.showSearchModal}
            />
          }
        </li>
      </ul>
    );
  }
}

Menu.propTypes = {
};

export default Menu;