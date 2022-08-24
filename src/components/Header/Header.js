import React, { Component } from 'react';
import './style.css';
import logo from './image/logo.png';

export class Header extends Component {
  render() {
    return (
      <header>
          <img src={logo} alt="logo" />
      </header>
    )
  }
}

export default Header;
