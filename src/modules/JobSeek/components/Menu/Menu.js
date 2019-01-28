import React, { Component } from 'react';
import './Menu.css';

import Profile from '../Profile';
import Notification from '../Notification';
import SearchModal from '../SearchModal';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
      showNotification: false,
      showSearchModal: false,
    };
  }

  handleMouseHover = () => {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState = (state) => {
    return {
      isHovering: !state.isHovering,
    };
  }

  handleNotifyBell = () => {
    this.setState(this.toggleNotifyBellClick);
  }

  toggleNotifyBellClick = (state) => {
    return {
      showNotification: !state.showNotification,
    }
  }

  openSearchModal = () => {
    console.log(this.state.showSearchModal, '=====search')
    this.setState(() => ({ showSearchModal: true }));
  }

  render() {
    const {
      isHovering,
      showNotification,
      showSearchModal,
    } = this.state;
    return (
      <ul className="sidebsmall sidebar-nav">
        <li className="posrel pd0 pull-left mw50 lh47">
          <div
            className="menu userlink ellipsis"
            onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}
          >
            <i className="fa fa-bars txt17 grey_txt" />
            <span className="txt17 col menu-span">Menu</span>
            {isHovering ? <Profile /> : ''}
          </div>
        </li>
        <li className="posrel">
          <span className="fa fa-bell notifybell" id="notifybellid" onClick={this.handleNotifyBell}>
            <i className="notcbell visible-xs" data-value="" />
          </span>
          {(showNotification && !isHovering) ? <Notification /> : ''}
        </li>
        <li className="posrel x">
          <a onClick={this.openSearchModal} className="search_overlay_trigger">
            <i className="fa fa-search" />
          </a>
          {
            showSearchModal
              && (
              <SearchModal
                modalState={showSearchModal}
              />)
          }
        </li>
      </ul>
    );
  }
}

Menu.propTypes = {
};

export default Menu;