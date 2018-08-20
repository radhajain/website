import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./pages/Home.js";
import Work from "./pages/Work.js";
import Contact from "./pages/Contact.js";

export default class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className="main">
          {/* <div className="navBar">
            <ul className="nav">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div> */}
          <div
            className="content"
            style={{ minHeight: "100%", position: "relative" }}
          >
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Work} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </HashRouter>
    );
  }
}
