import React, {Component} from 'react';
import {Nav, NavItem, Navbar} from 'react-bootstrap';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';


export default class AppNav extends Component {

  render() {
    return (
    <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1}><AccountsUIWrapper /></NavItem>
        <NavItem eventKey={2} href="#">Link Right</NavItem>
        <NavItem eventKey={3} href="#">Link Right</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);


  }
}
