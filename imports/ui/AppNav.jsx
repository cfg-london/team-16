import React, {Component} from 'react';
import {Image, Nav, NavItem, Navbar} from 'react-bootstrap';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';


export default class AppNav extends Component {

  render() {
    // Adding login, links and search bar to nav bar
    return (
    <Navbar>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1}><AccountsUIWrapper /></NavItem>
          <NavItem eventKey={2} href="#">Home</NavItem>
          <NavItem eventKey={3} href="#">Timeline</NavItem>
        </Nav>

        <form action="" class="navbar-form navbar-right">
          <div class="input-group">
            <input type="Search" placeholder="Search..." class="form-control" />
            <div class="input-group-btn">
              <button class="btn btn-info">
                <span class="glyphicon glyphicon-search"></span>
              </button>
            </div>
          </div>
        </form>
      </Navbar.Collapse>
    </Navbar>
  );
  }
}
