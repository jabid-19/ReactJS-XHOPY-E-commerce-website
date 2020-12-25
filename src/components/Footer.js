import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
      <div>
        <footer>
          <div class="dw-footer">
            <ul>
              <h1>Team</h1>
              <li>
                <a href="#">Zahid Music</a>
              </li>
              <li>
                <a href="#">Azhar Editor</a>
              </li>
              <li>
                <a href="#">Tousee Owner</a>
              </li>
            </ul>
            <ul>
              <h1>Channel</h1>
              <li>
                <a href="#">Video Tutorial</a>
              </li>
              <li>
                <a href="#">Website</a>
              </li>
              <li>
                <a href="#">Bolgs</a>
              </li>
            </ul>

            <div class="social">
              <h1>Social</h1>
              <div class="social-icons">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            <div class="search">
              <h1>Search</h1>
              <input type="search" placeholder=" Search Somthing Here" />
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
