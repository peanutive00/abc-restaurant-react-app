/**
 * navBar.js
 */

import React from 'react'

export class NavBar extends React.Component {
  render() {
    return (
      <ul>
        <li class="logo">ABC restaurant</li>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li class="dropdown">
          <a href="#" class="dropbtn">Dropdown</a>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
      </ul>
    )
  }
}
