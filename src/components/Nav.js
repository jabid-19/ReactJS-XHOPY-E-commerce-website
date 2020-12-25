import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <a href="#" className="logo">
            {/* <img src="images/logo.png" /> */}
            <h1>XHOPY</h1>
          </a>
          {/* <label className="menu-icon" for="menu-btn">
            <span className="nav-icon"></span>
          </label> */}

          <ul className="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>

          <a href="#">
            <img className="cart" src="images/cart.png" />
          </a>
        </nav>
      </div>
    );
  }
}
