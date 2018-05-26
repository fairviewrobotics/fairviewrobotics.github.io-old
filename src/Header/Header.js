import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import * as bootstrapUtils from "react-bootstrap/lib/utils/bootstrapUtils";
import { NavLink } from 'react-router-dom';
// This helps link 'react-router-dom' and 'react-bootstrap' together to make links work
import { LinkContainer } from "react-router-bootstrap";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/fontawesome-free-solid/shakable.es";

import './Header.css';

import logo from '../images/logo.png';

// This remove the default styling from 'react-bootstrap' for the Navbar
bootstrapUtils.addStyle(Navbar, 'none');

class Header extends Component {

  static propTypes = {
    isCollapsed: PropTypes.bool.isRequired
  };

  render() {
    const collapsedStyling = this.props.isCollapsed ? 'top-nav-collapse' : null;

    return (
      <Navbar collapseOnSelect fixedTop bsStyle="none" className={`nav-custom ${collapsedStyling}`}>
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink to="/">
              <img src={logo} alt="logo" className="header-logo" />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle>
            <FontAwesomeIcon icon={faBars}/>
          </Navbar.Toggle>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight id="main-nav">
            <LinkContainer to="/about">
              <NavItem>About</NavItem>
            </LinkContainer>
            <LinkContainer to="/sponsors">
              <NavItem>Sponsors</NavItem>
            </LinkContainer>
            <LinkContainer to="/gallery">
              <NavItem>Gallery</NavItem>
            </LinkContainer>
            <LinkContainer to="/calendar">
              <NavItem>Calendar</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
